import { useState } from "react";

const Inicio: React.FC = () => {
  const [Empresa, SetEmpresa] = useState("");
  
  return (
    <>
      {Empresa ? (
          <h1>Resumo rapido da sua empresa</h1>
      ) : (
          <>
          <h1>Cadastre sua empresa</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="nomeEmpresa" className="form-label">Nome da Empresa</label>
              <input type="text" className="form-control" id="nomeEmpresa" placeholder="Digite o nome da empresa" required></input>
            </div>
            <div className="mb-3">
              <label htmlFor="cnpj" className="form-label">CNPJ</label>
              <input type="text" className="form-control" id="cnpj" placeholder="Digite o CNPJ" required></input>
            </div>
            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">Endereço</label>
              <input type="text" className="form-control" id="endereco" placeholder="Digite o endereço completo" required></input>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
          </>
        )
      }
     </>
  );
};

export default Inicio;
