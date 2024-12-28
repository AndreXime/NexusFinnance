import "../styles/global.css";

export const metadata = {
  title: "NexusFinnace",
  description: "Bem-vindo ao Nexus Finnance"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" data-theme="coffee">
      <body>{children}</body>
    </html>
  );
}
