const Fluxo: React.FC = (Empresa) => {
  return (
    <>
      {Empresa ? (
        <h1>Nenhum fluxo de caixa cadastrado</h1>
      ) : (
        <>
          <h2>Voce precisa estar em uma empresa para ver Fluxos!</h2>
          <h3>Vá na aba inicio para cadastrar sua empresa</h3>
        </>
      )}
    </>
  );
};

export default Fluxo;
