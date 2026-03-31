import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael Damasceno — Automação com IA",
  description:
    "Trabalho manual é caro. IA resolve isso. Automações, chatbots e integrações que liberam seu time das tarefas repetitivas.",
  icons: {
    icon: "/preto e roxo.png",
  },
  openGraph: {
    title: "Rafael Damasceno — Automação com IA",
    description:
      "Trabalho manual é caro. IA resolve isso. Automações, chatbots e integrações que fazem seu negócio funcionar 24h.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
