"use client";
import { FaCashRegister, FaFilePdf, FaHome, FaBars } from "react-icons/fa";
import { FaPeopleGroup, FaGear, FaPersonWalkingArrowRight } from "react-icons/fa6";

import { str_menu } from "../../strings";

import { useState } from "react";

import Config from "../../components/dashboard-demo/Configuracoes";
import Relatorio from "../../components/dashboard-demo/Relatorios";
import Resumo from "../../components/dashboard-demo/Inicio";
import Funcionarios from "../../components/dashboard-demo/Funcionarios";
import Fluxo from "../../components/dashboard-demo/Fluxo";

const Demo = () => {
  const [activeComponent, setActiveComponent] = useState(str_menu.Inicio[1]);

  const renderContent = () => {
    switch (activeComponent) {
      case str_menu.Inicio[1]:
        return <Resumo />;
      case str_menu.Funcionario[1]:
        return <Funcionarios />;
      case str_menu.Fluxo[1]:
        return <Fluxo />;
      case str_menu.Relatorio[1]:
        return <Relatorio />;
      case str_menu.Config[1]:
        return <Config />;
      case str_menu.Sair:
        return <h1>Em construção</h1>;
      default:
        return <h1>Componente não encontrado</h1>;
    }
  };

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:mx-10 mt-14 lg:mt-8">
          {renderContent()}

          <div className="fixed top-0 left-0 w-full bg-base-200 lg:hidden h-14 flex items-center justify-between px-4">
            <label
              htmlFor="my-drawer"
              className="btn btn-square btn-ghost drawer-button fixed top-1 left-1 bg-opacity-65 w-12 h-12"
            >
              <FaBars />
            </label>

            <h1 className="text-xl font-bold mx-auto">{activeComponent}</h1>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-72 p-4">
            <h2 className="menu-title font-extrabold text-inherit text-xl mb-1">Nexus Finnance</h2>
            <li>
              <a
                onClick={() => {
                  setActiveComponent(str_menu.Inicio[1]);
                }}
                className="font-bold"
              >
                <FaHome />
                {str_menu.Inicio[0]}
              </a>
              <ul>
                <li>
                  <a>Resumo da empresa</a>
                </li>
                <li>
                  <a>Previsão de lucro</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={() => {
                  setActiveComponent(str_menu.Fluxo[1]);
                }}
                className="font-bold"
              >
                <FaCashRegister />
                {str_menu.Fluxo[0]}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setActiveComponent(str_menu.Funcionario[1]);
                }}
                className="font-bold"
              >
                <FaPeopleGroup /> {str_menu.Funcionario[0]}{" "}
              </a>
              <ul>
                <li>
                  <a>Pagamentos</a>
                </li>
                <li>
                  <a>Documentos</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={() => {
                  setActiveComponent(str_menu.Relatorio[1]);
                }}
                className="font-bold"
              >
                <FaFilePdf />
                {str_menu.Relatorio[0]}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setActiveComponent(str_menu.Config[1]);
                }}
                className="font-bold"
              >
                <FaGear />
                {str_menu.Config[0]}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setActiveComponent(str_menu.Sair);
                }}
                className="font-bold"
              >
                <FaPersonWalkingArrowRight />
                {str_menu.Sair}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Demo;
