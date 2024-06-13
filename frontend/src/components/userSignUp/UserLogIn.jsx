import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function UserLogIn({ registerPath = "/auth" }) {
  const {logIn} = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    logIn("/admin/map")
  };

  return (
    <form className="flex w-full max-w-lg justify-center text-zinc-100">
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center bg-custom-gray px-16 py-10 rounded-lg">
          <h2 className="font-extrabold text-4xl text-left pb-14">
            Inicio de sesión
          </h2>
          <div className="w-full">
            <label className="w-full" htmlFor="mail">
              Email
            </label>
            <input
              className="p-2 mt-2 w-full text-black bg-white rounded-t-[4px]"
              type="text"
              id="mail"
              placeholder="Ingresa un email"
              value={"admin.fisher@gmail.com"}
            />
          </div>
          <div className="w-full mt-6">
            <label className="w-full" htmlFor="password">
              Contraseña
            </label>
            <input
              className="p-2 mt-2 w-full text-black bg-white rounded-t-[4px]"
              type="password"
              id="password"
              placeholder="Contraseña"
              value={"password"}
            />
          </div>
          <span className="w-full flex text-center text-sm mt-4">
            <Link className="underline" to={"/"}>
              ¿HAS OLVIDADO LA CLAVE?
            </Link>
          </span>
          <button
            className="self-center py-3 px-2 w-[60%] bg-gray-700 rounded-xl text-base font-semibold my-10"
            type="submit"
            onClick={handleLogin}
          >
            INICIAR
          </button>
          <div className="w-full items-center text-white">
            <p className="text-center text-base">O</p>
            <p className="text-center text-sm">INICIAR DIRECTAMENTE CON</p>
          </div>
          <div className="flex w-full flex-row justify-center my-4 gap-3">
            <button className="bg-[#1f2937] py-2 px-3 rounded flex items-center text-sm">
              <FcGoogle size={25} className="mr-2" />
              GOOGLE
            </button>
            <button className="bg-[#1f2937] py-2 px-3 rounded flex items-center text-sm">
              <FaFacebook size={25} className="mr-2" />
              FACEBOOK
            </button>
          </div>
        </div>
        <span className="text-white self-center pt-4 pb-2">
          ¿No tienes una cuenta?{" "}
          <Link to={registerPath} className="underline">
            Regístrate
          </Link>
        </span>
      </div>
    </form>
  );
}
