const Config: React.FC = () => {
  const userData = {
    nome: "João pedro",
    email: "joaopedro@gmail.com",
    empresa: "Faculdade ABC"
  }
  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-4">Configurações de Perfil</h1>
      <h2 className="mb-4 text-xl font-bold">Dados do Perfil</h2>
      <div className="flex justify-center gap-5 mb-5">
        <div className="avatar">
          <div className="w-24 rounded">
            <img src="/demo_assets/profile.jpeg" />
          </div>
        </div>

        <div className="container text-lg">
          <p><strong>Nome:</strong> {userData.nome}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Empresa:</strong> {userData.empresa}</p>
        </div>
      </div>
      <div className="join">
        <input className="input input-bordered join-item" placeholder="Senha nova" />
        <button className="btn btn-primary join-item rounded-r-full">Alterar senha</button>
      </div>
    </>      
  );
};

export default Config;
