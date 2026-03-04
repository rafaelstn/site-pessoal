import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael Damasceno — Automação com IA",
  description:
    "Especialista em automação e inteligência artificial aplicada a negócios. Construo sistemas inteligentes que economizam tempo e reduzem custos.",
  openGraph: {
    title: "Rafael Damasceno — Automação com IA",
    description:
      "Construo sistemas inteligentes que economizam tempo, reduzem custos e fazem sua operação funcionar enquanto você dorme.",
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
