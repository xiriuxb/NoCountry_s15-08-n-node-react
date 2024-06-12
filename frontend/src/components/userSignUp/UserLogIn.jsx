import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../context/useAuth";

export default function UserLogIn({ registerPath = "/" }) {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("user:auth", "true");
    navigate("/admin");
  };

  return (
    <form className="flex w-full max-w-sm justify-center">
      <div className="flex flex-col w-full bg-slate-300/20 p-8 rounded-lg">
        <h2 className="text-center font-bold text-xl text-slate-400">
          Ingreso de Usuario
        </h2>
        <div className="mt-2">
          <label className="text-slate-400 w-full mb-4 ml-2" for="mail">
            Email
          </label>
          <input
            className="input input-bordered input-sm w-full text-slate-400"
            type="text"
            id="mail"
            placeholder="Email"
          />
        </div>
        <div className="mt-2">
          <label className="text-slate-400 w-full mb-4 ml-2" for="password">
            Contraseña
          </label>
          <input
            className="input input-bordered input-sm w-full text-slate-400"
            type="password"
            id="password"
            placeholder="Contraseña"
          />
        </div>
        <button
          className="text-center text-slate-200 p-2 w-[87%] bg-blue-900 rounded-xl text-xl my-3 self-center"
          type="submit"
          onClick={handleAuth}
        >
          Ingresar
        </button>
        <span className="text-sm self-center">
          ¿Desea Registrarse? &nbsp;
          <Link
            className="underline font-bold text-slate-400"
            to={registerPath}
          >
            Regístrese
          </Link>
        </span>
      </div>
    </form>
  );
}
