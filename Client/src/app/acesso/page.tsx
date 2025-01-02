"use client";
import { useState } from "react";
import Popup from "../../components/popup";
import { IconBrandGoogle, IconBrandInstagram } from "@tabler/icons-react";

const LoginPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [popup, setPopup] = useState({ title: "", message: "" });

  const toggleForm = () => setIsRegistering(!isRegistering);

  const submitLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Cria um objeto FormData com os inputs
    const payload = {
      email: formData.get("email") || "",
      senha: formData.get("senha") || ""
    };
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        credentials: "include"
      });
      if (!response.ok) {
        const jsonData = await response.json();
        setPopup({ title: "Ocorreu um erro:", message: `${jsonData.message}` });
      } else {
        window.location.replace("/plataforma");
      }
    } catch {
      setPopup({
        title: "Erro no servidor:",
        message: "Ocorreu um problema ao se conectar., Por favor tente novamente mais tarde."
      });
    }
  };

  const submitRegister = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Cria um objeto FormData com os inputs
    const payload = {
      nome: formData.get("nome") || "",
      email: formData.get("email") || "",
      senha: formData.get("senha") || ""
    };
    if (!(formData.get("senhaConfirm") === payload.senha)) {
      setPopup({ title: "Ocorreu um erro:", message: `As senhas não coencidem` });
      return;
    }
    try {
      const response = await fetch("/api/user/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        credentials: "include"
      });
      if (!response.ok) {
        const jsonData = await response.json();
        setPopup({ title: "Ocorreu um erro:", message: `${jsonData.message}` });
      } else {
        window.location.replace("/plataforma");
      }
    } catch {
      setPopup({
        title: "Erro no servidor:",
        message: "Ocorreu um problema ao se conectar., Por favor tente novamente mais tarde"
      });
    }
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center h-[85vh] md:h-screen">
        <h3 className="text-2xl font-extrabold text-center mb-[30px] text-primary">Nexus Finnance</h3>
        <div className="border border-neutral brightness-110 p-10 shadow-md rounded-lg">
          <h1 className="text-center text-2xl mb-4 font-extrabold">
            {isRegistering ? "Criar Conta" : "Entrar"}
          </h1>
          {isRegistering ? (
            <>
              <form onSubmit={submitRegister}>
                <label className="input input-bordered flex items-center gap-2 my-5">
                  <p className="select-none">Nome</p>
                  <input type="text" className="grow" name="nome" required />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <p className="select-none">Email</p>
                  <input type="email" className="grow" name="email" required />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-5">
                  <p className="select-none">Senha</p>
                  <input type="password" className="grow" name="senha" required />
                </label>

                <label className="input input-bordered flex items-center gap-2 mb-5">
                  <p className="select-none">Senha novamente</p>
                  <input type="password" className="grow" name="senhaConfirm" required />
                </label>

                <label className="label cursor-pointer mb-5">
                  <span className="label-text">Concordo com os termos e políticas</span>
                  <input type="checkbox" name="lembrar" className="toggle" />
                </label>

                <label className="label flex justify-center items-center">
                  <button type="submit" className="btn btn-warning">
                    Registrar
                  </button>
                </label>
              </form>
            </>
          ) : (
            <>
              <form onSubmit={submitLogin}>
                <label className="input input-bordered flex items-center gap-2">
                  <p className="select-none">Email</p>
                  <input type="email" className="form-control" name="email" required />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-5">
                  <p className="select-none">Senha</p>
                  <input type="password" className="form-control" name="senha" required />
                </label>

                <label className="label cursor-pointer mb-5">
                  <span className="label-text">Lembrar de mim</span>
                  <input type="checkbox" name="lembrar" className="toggle" />
                </label>

                <label className="label flex justify-center items-center">
                  <button type="submit" className="btn btn-warning w-100">
                    Entrar
                  </button>
                </label>

                <label className="label flex flex-col">
                  Ou entre com:
                  <div className="pt-4">
                    <button type="submit" className="mr-5">
                      <IconBrandGoogle size={35} />
                    </button>
                    <button type="submit" className="">
                      <IconBrandInstagram size={35} />
                    </button>
                  </div>
                </label>
              </form>
            </>
          )}
          <div className="mt-3 text-center">
            <Popup message={popup.message} title={popup.title} status={false} />
            <button className="btn btn-link" onClick={toggleForm}>
              {isRegistering ? "Já tem uma conta? Faça login" : "Ainda não tem uma conta? Registre-se"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default LoginPage;
