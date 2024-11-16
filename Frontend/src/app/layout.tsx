import Script from "next/script";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../styles/bootstrap/bootstrap.min.css'

export const metadata = {
  title: "NexusFinnace",
  description: "Bem-vindo ao meu site com Next.js 13+",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Script src="vendor/bootstrap/bootstrap.bundle.min.js" strategy="beforeInteractive"/>
      </body>
    </html>
  );
}

