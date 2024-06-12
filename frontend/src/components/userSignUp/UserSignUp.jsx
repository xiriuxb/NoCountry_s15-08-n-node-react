import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';


export default function UserSignUp({ loginPath = "/" }) {
  return (
    <form className="flex flex-col w-full bg-black h-screen">
      <div className="bg-custom-dark w-4/3 mr-80 h-screen p-20">
        <div className="bg-custom-gray ml-16 mt-30 mr-16 p-10">
          <h2 className="font-extrabold text-4xl text-left text-white">
            Registro de Usuario
          </h2>
          <div className="mt-6 mb-4">
            <label className="text-white w-full ml-2" for="name">
              Nombre completo
            </label>
            <input
              className="p-2 mt-2 w-full text-black bg-white"
              type="text"
              id="name"
              placeholder="Nombre y Apellido"
            />
          </div>
          <div className="mt-2">
            <label className="text-white w-full mb-4 ml-2" for="mail">
              Email
            </label>
            <input
              className="p-2 mt-2 w-full text-black bg-white"
              type="text"
              id="mail"
              placeholder="Ingresa un email"
            />
          </div>
          <div className="mt-2">
            <label className="text-white w-full mb-4 ml-2" for="password">
              Contraseña
            </label>
            <input
              className="p-2 mt-2 w-full text-black bg-white"
              type="password"
              id="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="mt-2">
            <label className="text-white w-full mb-4 ml-2" for="expertiz">
              Expertiz
            </label>
            <select
              className="p-2 mt-2 w-full text-black bg-white"
              id="expertiz"
            >
              <option value="beginner">Principiante</option>
              <option value="intermediate">Intermedio</option>
              <option value="expert" selected >Experto</option>
            </select>
          </div>        
          <div className="text-center justify-center mt-2 w-full">
            <button
              className="text-center text-white p-2 w-[40%] bg-gray-700 rounded-xl text-xl my-3"
              type="submit">
              REGISTRARSE
            </button>
          </div>
          <div className="w-full items-center mt-4">
            <p className="text-center text-xl underline">
              O
            </p>
            <p className="text-center text-LG underline">
              INICIAR DIRECTAMENTE CON
            </p>
          </div>
          <div className="flex w-full flex-row justify-center mt-4">
            <button className="bg-gray-800 text-white p-2 rounded flex items-center mr-2">
              <FcGoogle className="mr-4" />
              GOOGLE
            </button>
            <button className="bg-gray-800 text-white p-2 rounded flex items-center ml-2">
              <FaFacebook className="mr-2" />
              FACEBOOK
            </button>
          </div>

        </div>
        <span className="w-full flex justify-center mt-20">
          <Link className="underline font-bold text-white" to={loginPath}>¿YA TIENES UNA CUENTA?</Link>
        </span>
      </div>
    </form>
  );
}