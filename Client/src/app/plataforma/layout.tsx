import Script from 'next/script';
import '../../styles/bootstrap/bootstrap.min.css';

export const metadata = {
  title: 'NexusFinnace | Dashboard',
  description: 'Bem-vindo ao meu site com Next.js 13+',
};

export default function PlataformaLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang='pt-BR'>
      <body className='plataforma-layout'>
        {children}
        <Script
          src="vendor/bootstrap/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
