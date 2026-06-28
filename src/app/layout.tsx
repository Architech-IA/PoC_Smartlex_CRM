import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smartlex CRM — PoC",
  description:
    "PoC de CRM legal para Smartlex con gestión documental impulsada por IA — clasificación, búsqueda y extracción inteligente de información en expedientes y contratos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
