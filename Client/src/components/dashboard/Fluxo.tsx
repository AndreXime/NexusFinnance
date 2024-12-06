import { useState } from "react";

const Fluxo: React.FC = () => {
  const [Empresa, SetEmpresa] = useState("");

  return (
    <>
      {Empresa ? (
        <h1>Nenhum fluxo de caixa cadastrado</h1>
      ) : (
        <h1> Voce precisa cadastrar um empresa primeiro</h1>   
      )}
     </>
  );
};

export default Fluxo;
