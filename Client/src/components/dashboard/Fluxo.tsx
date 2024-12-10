const Fluxo: React.FC = (Empresa) => {
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
