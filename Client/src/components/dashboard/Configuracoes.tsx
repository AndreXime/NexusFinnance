import { useEffect, useState } from 'react';

interface Perfil {
  nome: string;
  email: string;
  updatedAt: string;
}

const Config: React.FC = () => {
  const [Perfil, setPerfil] = useState<Perfil | null>(null);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch('http://localhost:3001/api/user', {
        method: 'GET',
        credentials: 'include',
      });
      const rJson = await response.json();
      setPerfil(rJson.message);
    };
    fetchdata();
  });

  return (
    <>
      <h1 className='mb-4'>Configurações e Perfil</h1>
      {Perfil ? (
        <>
          <h2 className='mb-4'>Dados do Perfil</h2>
          <div className='container'>
            <div>
              <div>
                <strong>Nome:</strong> {Perfil.nome}
              </div>
              <div>
                <strong>Email:</strong> {Perfil.email}
              </div>
              <div>
                <strong>Atualizado em:</strong> {new Date(Perfil.updatedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='alert alert-warning' role='alert'>
          Aguarde...
        </div>
      )}
    </>
  );
};

export default Config;
