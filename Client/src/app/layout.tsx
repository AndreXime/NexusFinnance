import '../styles/bootstrap/bootstrap.min.css';

export const metadata = {
  title: 'NexusFinnace',
  description: 'Bem-vindo ao meu site com Next.js 13+',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang='pt-BR'>{children}</html>;
}
