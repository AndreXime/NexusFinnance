import { useState } from "react";

const Funcionarios: React.FC = () => {
  const [Empresa, SetEmpresa] = useState("");

  return (
    <>
      {Empresa ? (
        <h1>Nenhum funcionario cadastrado</h1>
      ) : (
        <h1> Voce precisa cadastrar um empresa primeiro</h1>   
      )}
     </>
  );
};

export default Funcionarios;
