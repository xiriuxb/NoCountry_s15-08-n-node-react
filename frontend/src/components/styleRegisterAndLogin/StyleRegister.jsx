import UserSignUp from '../userSignUp/UserSignUp.jsx';
import React from "react";
import { Link } from "react-router-dom";

export default function StyleRegister() {
    return (
        <div className="flex w-full bg-black flex-row h-screen">
            <div className="flex col-1 w-1/2">
                <img src="/canadepesca.png" className="h-screen ml-80" />
                <div className="absolute ml-80">
                    <h2 className="text-6xl font-playfair text-white p-6 pb-96 mb-12">FishSeason</h2>
                    <h3 className="text-4xl font-playfair justify-left text-white w-2/3 pt-96 p-6">Los mejores momentos son los que creas</h3>
                </div>
            </div>
            <div className="flex relative col-2 w-1/2 h-screen bg-custom-gray mr-80 ml-80 p-6 pb-96 mb-12">
                <form className="flex absolute w-2/3 justify-center bg-custom-dark mr-80 mt-40 ml-10">
                    <div className='w-1/2 absolute '>
                        <h2 className="text-4xl font-SansSerif font-extrabold text-white mb-10">Registro de usuario</h2>

                        <label className="w-full pt-40 mb-4 ml-2 text-white " for="name">
                            Nombre Completo
                        </label>
                        <input
                            className="input w-full text-black bg-white"
                            type="text"
                            id="name"
                            placeholder="Nombre y Apellido"
                        />
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
            </div>

        </div>
    )
};