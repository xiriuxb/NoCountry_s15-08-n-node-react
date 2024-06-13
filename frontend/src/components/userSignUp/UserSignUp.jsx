import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

export default function UserSignUp({ loginPath = "/auth/login" }) {
  const { logIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn("/map");
  };

  return (
    <form className="flex w-full max-w-lg justify-center text-zinc-100">
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center bg-custom-gray px-14 py-10 rounded-lg">
          <h2 className="font-extrabold text-4xl text-left pb-14">
            Registro de Usuario
          </h2>
          <div className="w-full">
            <label className="w-full" htmlFor="name">
              Nombre completo
            </label>
            <input
              className="p-2 mt-2 w-full text-black bg-white rounded-t-[4px]"
              type="text"
              id="name"
              placeholder="Nombre y Apellido"
              value={"Lionel Messi"}
            />
          </div>
          <div className="w-full mt-6">
            <label className=" w-full" htmlFor="mail">
              Email
            </label>
            <input
              className="p-2 mt-2 w-full text-black bg-white rounded-t-[4px]"
              type="text"
              id="mail"
              placeholder="Ingresa un email"
              value={"leo.messi@gmail.com"}
            />
          </div>
          <div className="w-full mt-6">
            <label className=" w-full" htmlFor="password">
              Contraseña
            </label>
            <input
              className="p-2 mt-2 w-full text-black bg-white rounded-t-[4px]"
              type="password"
              id="password"
              placeholder="Contraseña"
              value={"superSecret"}
            />
          </div>
          <div className="w-full mt-6">
            <label className=" w-full" htmlFor="expertiz">
              Expertiz
            </label>
            <select
              className="p-2 mt-2 w-full text-black bg-white rounded-t-[4px]"
              id="expertiz"
            >
              <option value="beginner">Principiante</option>
              <option value="intermediate">Intermedio</option>
              <option value="expert" selected>
                Experto
              </option>
            </select>
          </div>
          <button
            className="self-center text-zinc-200 py-3 px-2 w-[60%] bg-gray-700 rounded-xl text-base font-semibold my-10"
            type="submit"
            onClick={handleSubmit}
          >
            REGISTRARSE
          </button>
          <div className="w-full items-center ">
            <p className="text-center text-lg">O</p>
            <p className="text-center text-base">INICIAR DIRECTAMENTE CON</p>
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
        <span className=" self-center pt-4 pb-2">
          ¿Ya tienes una cuenta?{" "}
          <Link to={loginPath} className="underline">
            Ingresa
          </Link>
        </span>
      </div>
    </form>
  );
}
