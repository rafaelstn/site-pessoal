import { Resend } from "resend";
import { NextResponse } from "next/server";

const rateLimit = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

function sanitize(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Muitas tentativas. Tente novamente em 1 hora." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { nome, empresa, email, problema } = body;

    if (!nome || !email || !problema) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "contato@rafaeldamasceno.dev",
      replyTo: email,
      subject: `Novo lead do portfólio: ${sanitize(nome)}${empresa ? ` (${sanitize(empresa)})` : ""}`,
      html: `
        <h2>Novo contato pelo portfólio</h2>
        <p><strong>Nome:</strong> ${sanitize(nome)}</p>
        <p><strong>Empresa:</strong> ${sanitize(empresa || "Não informada")}</p>
        <p><strong>Email:</strong> ${sanitize(email)}</p>
        <p><strong>Problema:</strong> ${sanitize(problema)}</p>
        <hr />
        <p style="color: #888; font-size: 12px;">Enviado pelo formulário do portfólio rafaeldamasceno.dev</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
