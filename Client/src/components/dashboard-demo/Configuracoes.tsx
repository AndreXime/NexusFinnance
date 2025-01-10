import Image from "next/image";

const Config: React.FC = () => {
  const userData = {
    nome: "João pedro",
    email: "joaopedro@gmail.com",
    empresa: "Faculdade ABC"
  };

  const mudarTema = (tema: string) => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("theme", tema);
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-4 hidden lg:block">Configurações de Perfil</h1>
      <div className="mx-5">
        <h2 className="text-xl font-bold mt-4">Dados do Perfil</h2>
        <div className="flex justify-center gap-5 mt-4">
          <div className="avatar">
            <div className="w-24 rounded">
              <Image src="/demo_assets/profile.jpeg" alt="Sua foto de perfil" />
            </div>
          </div>

          <div className="container">
            <p>
              <strong>Nome:</strong> {userData.nome}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Empresa:</strong> {userData.empresa}
            </p>
          </div>
        </div>

        <div className="container join my-4">
          <input className="input input-bordered join-item" placeholder="Senha nova" />
          <button className="btn btn-primary join-item rounded-r-full">Alterar senha</button>
        </div>

        <h2 className="text-xl font-bold">Temas</h2>
        <div className="join gap-2 mt-4">
          <a
            className="join-item btn"
            data-theme="light"
            onClick={() => {
              mudarTema("light");
            }}
          >
            Claro
          </a>
          <a
            className="join-item btn"
            data-theme="dark"
            onClick={() => {
              mudarTema("dark");
            }}
          >
            Escuro
          </a>
          <a
            className="join-item btn"
            data-theme="coffee"
            onClick={() => {
              mudarTema("coffee");
            }}
          >
            Café
          </a>
          <a
            className="join-item btn"
            data-theme="winter"
            onClick={() => {
              mudarTema("winter");
            }}
          >
            Inverno
          </a>
        </div>
      </div>
    </>
  );
};

export default Config;
