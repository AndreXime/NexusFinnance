import { useUser } from "../../context/userContext";

const Config: React.FC = () => {
  const { userData } = useUser();

  return (
    <>
      <h1 className="mb-4">Configurações e Perfil</h1>
      {userData ? (
        <>
          <h2 className="mb-4">Dados do Perfil</h2>
          <div className="container">
            <div>
              <div>
                <strong>Nome:</strong> {userData.nome}
              </div>
              <div>
                <strong>Email:</strong> {userData.email}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="alert alert-warning" role="alert">
          Aguarde...
        </div>
      )}
    </>
  );
};

export default Config;
