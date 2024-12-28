import { useEffect } from "react";
import { useData } from "../../context/dataContext";

const Funcionarios: React.FC = () => {
  const { data, addFuncionario } = useData();

  useEffect(() => {
    const fetchFuncionario = async () => {
      const response = await fetch("api/funcionario", {
        method: "GET",
        credentials: "include"
      });
      if (response.ok) {
        const jData = await response.json();
        addFuncionario(jData.message);
      }
    };
    fetchFuncionario();
  });

  return (
    <>
      {data.Empresa ? (
        <>{data.Funcionario.length === 0 ? <></> : <></>}</>
      ) : (
        <>
          <h2>Voce precisa estar em uma empresa para ver funcionarios!</h2>
          <h3>Vá na aba inicio para cadastrar sua empresa</h3>
        </>
      )}
    </>
  );
};

export default Funcionarios;
