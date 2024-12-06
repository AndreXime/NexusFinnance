import { useState } from "react";

const Relatorio: React.FC = () => {
  const [Empresa, SetEmpresa] = useState("");

  return (
    <>
      {Empresa ? (
        <h1>Nenhum relatorio feito ainda</h1>
      ) : (
        <h1> Voce precisa cadastrar um empresa primeiro</h1>   
      )}
     </>
  );
};

export default Relatorio;
