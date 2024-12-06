'use client';
import { useState } from 'react';
import Popup from '../../components/popup';
import '../../styles/font-awesome/css/all.min.css';

const LoginPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const toggleForm = () => setIsRegistering(!isRegistering);

  const submitLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Cria um objeto FormData com os inputs
    const payload = {
      email: formData.get('email') || '',
      senha: formData.get('senha') || '',
    };
    try {
      const response = await fetch('http://localhost:3001/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'include',
      });
      const jsonData = await response.json();
      if (!response.ok) {
        setPopupMessage(`Ocorreu um erro:\n ${jsonData.message}`);
      } else {
        window.location.replace("/plataforma")
      }
    } catch (error) {
      setPopupMessage(`Error no servidor:\n ${error.message}`);
    }
    
    setPopupOpen(true);
  };

  const submitRegister = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Cria um objeto FormData com os inputs
    const payload = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      senha: formData.get('senha'),
      cargo: formData.get('cargo'),
    };
    const response = await fetch('http://localhost:3001/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    });
    const jsonData = await response.json();
    if (!response.ok) {
      setPopupMessage(`Ocorreu um erro:\n ${jsonData.message}`);
    } else {
      setPopupMessage(`Sucesso:\n ${jsonData.message}`);
    }
    setPopupOpen(true);
  };

  return (
    <body className='d-flex justify-content-center align-items-center bg-dark'>
      <div className='card p-5 m-4' style={{ width: '60vh' }}>
        <h1 className='text-center mb-4'>{isRegistering ? 'Criar Conta' : 'Entrar'}</h1>
        {isRegistering ? (
          <>
            <form onSubmit={submitRegister}>
              <div className='mb-4'>
                <label htmlFor='nome' className='form-label'>
                  Nome
                </label>
                <input type='text' className='form-control' name='nome' required />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input type='email' className='form-control' name='email' required />
              </div>
              <div className='mb-4'>
                <label htmlFor='cargo' className='form-label'>
                  Cargo
                </label>
                <select name='cargo' className='form-control' required>
                  <option value='' disabled defaultValue={''}>
                    Selecione um cargo
                  </option>
                  <option value='Administrador'>Administrador</option>
                  <option value='Contador'>Contador</option>
                </select>
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='form-label'>
                  Senha
                </label>
                <input type='password' className='form-control' name='senha' required />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='form-label'>
                  Repita a senha
                </label>
                <input type='password' className='form-control' name='senhaConfirm' required />
              </div>
              <button type='submit' className='btn btn-warning w-100'>
                Registrar
              </button>
            </form>
          </>
        ) : (
          <>
            <form onSubmit={submitLogin}>
              <div className='mb-4'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input type='email' className='form-control' name='email' required />
              </div>
              <div className='mb-4'>
                <label htmlFor='senha' className='form-label'>
                  Senha
                </label>
                <input type='password' className='form-control' name='senha' required />
              </div>
              <div className='mb-4 form-check'>
                <input type='checkbox' className='form-check-input' id='rememberMe' />
                <label className='form-check-label' htmlFor='rememberMe'>
                  Lembrar de mim
                </label>
              </div>
              <button type='submit' className='btn btn-warning w-100'>
                Entrar
              </button>
            </form>
          </>
        )}
        <div className='mt-3 text-center'>
          <button className='btn btn-link' onClick={toggleForm}>
            {isRegistering ? 'Já tem uma conta? Faça login' : 'Ainda não tem uma conta? Registre-se'}
          </button>
        </div>
      </div>
      <Popup
        isOpen={popupOpen}
        message={popupMessage}
        onClose={() => {
          setPopupOpen(false);
        }}
      />
    </body>
  );
};
export default LoginPage;
