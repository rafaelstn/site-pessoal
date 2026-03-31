"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_LINK =
  "https://wa.me/5511985529546?text=Olá%20Rafael%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20automação%20com%20IA.";

const INPUT_CLASS =
  "w-full bg-white/[0.05] border rounded-lg px-4 py-3 text-sm text-white placeholder:text-ink-subtle mb-3 outline-none transition-colors";

export function CTAFinal() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    problema: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function validate() {
    const newErrors: Record<string, string> = {};

    if (!form.nome.trim()) newErrors.nome = "Informe seu nome";
    if (!form.email.trim()) {
      newErrors.email = "Informe seu email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email inválido";
    }
    if (!form.problema.trim()) newErrors.problema = "Descreva seu problema";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ nome: "", empresa: "", email: "", problema: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-surface overflow-hidden">
      {/* Glow verde */}
      <div
        className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-main relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light leading-tight tracking-[-1.5px] mb-4"
        >
          Quanto custa mais um mês fazendo isso na mão?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-ink-muted text-lg mb-12"
        >
          Me conta o problema. Se tiver solução, eu apresento em 48h.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[720px] mx-auto text-left"
        >
          {/* WhatsApp card */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-dark transition-colors rounded-xl p-6 sm:p-10 text-center flex flex-col items-center justify-center"
          >
            <svg
              className="w-10 h-10 text-black mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <h3 className="text-black text-xl font-bold mb-1">
              Falar no WhatsApp
            </h3>
            <p className="text-black/50 text-sm">Resposta em até 2h</p>
          </a>

          {/* Form card */}
          <form
            className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 sm:p-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <h3 className="text-white text-base font-medium mb-5">
              Ou deixe seus dados
            </h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-medium mb-1">Mensagem enviada!</p>
                <p className="text-ink-subtle text-sm">Respondo em até 48h.</p>
              </div>
            ) : (
              <>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Seu nome *"
                    value={form.nome}
                    onChange={(e) => handleChange("nome", e.target.value)}
                    className={`${INPUT_CLASS} ${errors.nome ? "border-red-500/60" : "border-white/[0.08] focus:border-accent/40"}`}
                  />
                  {errors.nome && (
                    <p className="text-red-400 text-xs -mt-2 mb-2">{errors.nome}</p>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="Sua empresa"
                  value={form.empresa}
                  onChange={(e) => handleChange("empresa", e.target.value)}
                  className={`${INPUT_CLASS} border-white/[0.08] focus:border-accent/40`}
                />

                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Seu melhor email *"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`${INPUT_CLASS} ${errors.email ? "border-red-500/60" : "border-white/[0.08] focus:border-accent/40"}`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs -mt-2 mb-2">{errors.email}</p>
                  )}
                </div>

                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Qual problema quer resolver? *"
                    value={form.problema}
                    onChange={(e) => handleChange("problema", e.target.value)}
                    className={`${INPUT_CLASS} ${errors.problema ? "border-red-500/60" : "border-white/[0.08] focus:border-accent/40"}`}
                  />
                  {errors.problema && (
                    <p className="text-red-400 text-xs -mt-2 mb-2">{errors.problema}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-white text-surface font-semibold text-sm py-3 rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Enviando..." : "Enviar"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-xs mt-3 text-center">
                    Erro ao enviar. Tente novamente ou fale no WhatsApp.
                  </p>
                )}
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
