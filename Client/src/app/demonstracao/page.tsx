"use client"
import { FaCashRegister, FaFilePdf, FaHome, FaBars } from "react-icons/fa";
import { FaPeopleGroup, FaGear, FaPersonWalkingArrowRight } from "react-icons/fa6";

import { useState } from "react";

import Config from "../../components/dashboard-demo/Configuracoes";
import Relatorio from "../../components/dashboard-demo/Relatorios";
import Inicio from "../../components/dashboard-demo/Inicio";
import Funcionarios from "../../components/dashboard-demo/Funcionarios";
import Fluxo from "../../components/dashboard-demo/Fluxo";

const Demo = () => {
   const [activeComponent, setActiveComponent] = useState("Inicio");
   
   const renderContent = () => {
      switch (activeComponent) {
        case "Inicio":
          return <Inicio />;
        case "Funcionarios":
          return <Funcionarios />;
        case "Relatorios":
          return <Relatorio />;
        case "Config":
          return <Config />;
        case "Fluxo":
          return <Fluxo />;
        default:
          return <h1>Componente não encontrado</h1>;
      }
   };
   
   return (
      <>
         <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content lg:mx-10 mt-9">
               {renderContent()} 
               
               <label htmlFor="my-drawer"
                  className="btn btn-square drawer-button lg:hidden fixed top-1 left-1 bg-opacity-65 w-12 h-12">
                  <FaBars />
               </label>
            </div>
            <div className="drawer-side">
               <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
               <ul className="menu bg-base-200 min-h-full w-72 p-4">
                  <h2 className="menu-title font-extrabold text-black text-xl mb-1">Nexus Finnance</h2>
                  <li><a
                     onClick={() => {
                        setActiveComponent("Inicio");
                     }}
                     className="font-bold"><FaHome /> Inicio</a>
                     <ul>
                        <li><a>Resumo da empresa</a></li>
                        <li><a>Previsão de lucro</a></li>
                     </ul>
                  </li>
                  <li><a
                     onClick={() => {
                        setActiveComponent("Fluxo");
                     }}
                     className="font-bold"><FaCashRegister /> Fluxo de caixa</a></li>
                  <li><a
                     onClick={() => {
                        setActiveComponent("Funcionarios");
                     }}
                     className="font-bold"><FaPeopleGroup /> Funcionarios </a>
                     <ul>
                        <li><a>Pagamentos</a></li>
                        <li><a>Documentos</a></li>
                     </ul>
                  </li>
                  <li><a
                     onClick={() => {
                        setActiveComponent("Relatorios");
                     }}
                     className="font-bold"><FaFilePdf /> Gerar relatorio</a></li>
                  <li><a
                     onClick={() => {
                        setActiveComponent("Config");
                     }}
                     className="font-bold"><FaGear /> Configurações</a></li>
                  <li><a
                     onClick={() => {
                        setActiveComponent("Config");
                     }}
                     className="font-bold"><FaPersonWalkingArrowRight /> Sair</a></li>
               </ul>
            </div>
         </div>
      </>
   )
}

export default Demo;