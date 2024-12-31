import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-8 px-8">
      <aside className="grid-flow-col items-center font-bold justify-self-center md:justify-self-start">
        <p >Copyright © {new Date().getFullYear()} Nexus Finnance</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end">
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
