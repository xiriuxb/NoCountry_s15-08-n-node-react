import React from "react";
import { Link } from "react-router-dom";

export default function UserSignUp({loginPath = "/"}) {
  return (
    <form className="flex w-full max-w-sm justify-center">
      <div className="flex flex-col w-full bg-slate-300/20 p-8 rounded-lg">
        <h2 className="text-center font-bold text-xl text-slate-400">
          Registro de Usuario
        </h2>
        <div className="mt-2">
          <label className="text-slate-400 w-full mb-4 ml-2" for="name">
            Nombre
          </label>
          <input
            className="input input-bordered input-sm w-full text-slate-400"
            type="text"
            id="name"
            placeholder="Nombre"
          />
        </div>
        <div className="mt-2">
          <label className="text-slate-400 w-full mb-4 ml-2" for="surname">
            Apellido
          </label>

          <input
            className="input input-bordered input-sm w-full text-slate-400"
            type="text"
            id="surname"
            placeholder="Apellido"
          />
        </div>
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
        <div className="mt-2">
          <label className="text-slate-400 w-full mb-4 ml-2" for="expertiz">
            Expertiz
          </label>
          <select
            className="select select-bordered select-sm w-full text-slate-400"
            id="expertiz"
          >
            <option value="beginner">Principiante</option>
            <option value="intermediate">Intermedio</option>
            <option value="expert">Experto</option>
          </select>
        </div>
        <button
          className="text-center text-slate-200 p-2 w-[87%] bg-blue-900 rounded-xl text-xl my-3 self-center"
          type="submit"
        >
          Registrar
        </button>
        <span className="text-sm self-center">
            ¿Tiéne ya una cuenta? &nbsp;
            <Link className="underline font-bold text-slate-400" to={loginPath}>Ingrese</Link>
        </span>
      </div>
    </form>
  );
}
