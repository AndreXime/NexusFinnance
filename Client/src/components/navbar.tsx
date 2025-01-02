"use client";
import Link from "next/link";
import { IconMenu2, IconRocket } from "@tabler/icons-react";

const Navbar: React.FC = () => {
  const mudarTema = (tema: string) => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("theme", tema);
  };

  return (
    <nav className="fixed z-10 top-0 right-0 left-0">
      <div className="navbar bg-neutral text-neutral-content md:px-9">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IconMenu2 />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-neutral text-neutral-content"
            >
              <li>
                <a href="#sobre">Sobre nós</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#funcionalidades">Funcionalidades</a>
              </li>
              <li>
                <a href="#planos">Planos</a>
              </li>
              <li>
                <a>Temas</a>
                <ul className="p-2">
                  <li>
                    <button
                      onClick={() => {
                        mudarTema("light");
                      }}
                    >
                      Claro
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        mudarTema("dark");
                      }}
                    >
                      Escuro
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        mudarTema("coffee");
                      }}
                    >
                      Coffee
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        mudarTema("winter");
                      }}
                    >
                      Winter
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn hidden btn-ghost text-xl md:inline-flex">Nexus Finnance</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#sobre">Sobre nós</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#funcionalidades">Funcionalidades</a>
            </li>
            <li>
              <a href="#planos">Planos</a>
            </li>
            <li>
              <details>
                <summary>Temas</summary>
                <ul className="p-2 bg-neutral text-neutral-content">
                  <li>
                    <button
                      onClick={() => {
                        mudarTema("light");
                      }}
                    >
                      Claro
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        mudarTema("dark");
                      }}
                    >
                      Escuro
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        mudarTema("coffee");
                      }}
                    >
                      Coffee
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        mudarTema("winter");
                      }}
                    >
                      Winter
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={"/acesso"} className="btn btn-secondary">
            <IconRocket /> Acessar agora
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
