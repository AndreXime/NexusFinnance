import "../../styles/global.css";

export const metadata = {
  title: "NexusFinnace | Dashboard",
  description: "Bem-vindo ao meu site com Next.js 13+"
};

export default function PlataformaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
