import '../styles/bootstrap/bootstrap.min.css';

export const metadata = {
  title: 'NexusFinnace',
  description: 'Bem-vindo ao Nexus Finnance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang='pt-BR'>{children}</html>;
}
