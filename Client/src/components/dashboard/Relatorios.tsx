const Relatorio: React.FC = (Empresa) => {
  return (
    <>
      {Empresa ? <h1>Nenhum relatorio feito ainda</h1> : <h1> Voce precisa cadastrar um empresa primeiro</h1>}
    </>
  );
};

export default Relatorio;
