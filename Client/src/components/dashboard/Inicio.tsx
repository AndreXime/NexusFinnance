"use client";

import { useEffect } from "react";
import { useData } from "../../context/dataContext";

const Inicio: React.FC = () => {
  const { data, setEmpresa } = useData();

  useEffect(() => {
    const fetchEmpresa = async () => {
      const response = await fetch("api/empresa", {
        method: "GET",
        credentials: "include"
      });
      if (response.ok) {
        const jData = await response.json();
        setEmpresa(jData.message);
      }
    };
    fetchEmpresa();
  });

  return (
    <>
      {data.Empresa ? (
        <>
          <h2>Resumo rapido da sua empresa</h2>
          <div>Resumo aqui</div>
        </>
      ) : (
        <>
          <h1>Cadastre sua empresa</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="nomeEmpresa" className="form-label">
                Nome da Empresa
              </label>
              <input
                type="text"
                className="form-control"
                id="nomeEmpresa"
                placeholder="Digite o nome da empresa"
                required
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="cnpj" className="form-label">
                CNPJ
              </label>
              <input
                type="text"
                className="form-control"
                id="cnpj"
                placeholder="Digite o CNPJ"
                required
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Endereço
              </label>
              <input
                type="text"
                className="form-control"
                id="endereco"
                placeholder="Digite o endereço completo"
                required
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Inicio;
