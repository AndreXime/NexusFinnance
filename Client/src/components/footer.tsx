import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-8 px-8">
      <aside className="grid-flow-col items-center font-bold">
        <p>Copyright © {new Date().getFullYear()} - Nexus Finnance - Todos os direitos reservados</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <IconBrandFacebook />
        </a>
        <a>
          <IconBrandInstagram />
        </a>
        <a>
          <IconBrandTwitter />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
