import React from 'react';

export default function UserSignUp() {
    return (
        <form className='flex w-full p-4'>
            <div className='flex flex-col w-full m-12 font-sans bg-slate-300 p-8 '>
                <h2 className='text-center font-bold text-xl text-black'>Registro de Usuario</h2>
                <div className='w-full mt-4'>
                    <label className='text-black w-full mb-4 ml-4' for='name'>
                        Nombre
                    </label>
                    <div className='mt-4'>
                        <input className='bg-white text-black w-96 pl-4' type='text' id='name' placeholder='Nombre' />
                    </div>
                </div>
                <div className='w-full mt-4'>
                    <label className='text-black w-full mb-4 ml-4' for='surname'>
                        Apellido
                    </label>
                    <div className='mt-4'>
                        <input className='bg-white text-black w-96 pl-4' type='text' id='surname' placeholder='Apellido' />
                    </div>
                </div>
                <div className='w-full mt-4'>
                    <label className='text-black w-full mb-4 ml-4' for='mail'>
                        Email
                    </label>
                    <div className='mt-4'>
                        <input className='bg-white text-black w-96 pl-4' type='text' id='mail' placeholder='Email' />
                    </div>
                </div>
                <div className='w-full mt-4'>
                    <label className='text-black w-full mb-4 ml-4' for='residence'>
                        Lugar de residencia
                    </label>
                    <div className='mt-4'>
                        <input className='bg-white text-black w-96 pl-4' type='text' id='residence' placeholder='Lugar de residencia' />
                    </div>
                </div>
                <div className='w-full mt-4'>
                    <label className='text-black w-full mb-4 ml-4' for='password'>
                        Contraseña
                    </label>
                    <div className='mt-4'>
                        <input className='bg-white text-black w-96 pl-4' type='password' id='password' placeholder='Contraseña' />
                    </div>
                </div>
                <div className='w-full mt-4'>
                    <label className='text-black w-full mb-4 ml-4' for='expertiz'>
                        Expertiz
                    </label>
                    <div className='mt-4'>
                        <select className='bg-white text-black w-60' id='expertiz'>
                            <option value='beginner'>
                                Principiante
                            </option>
                            <option value='intermediate'>
                                Intermedio
                            </option>
                            <option value='expert'>
                                Experto
                            </option>
                        </select>
                    </div>
                </div>
                <div className='text-center items-center m-10 w-full'>
                    <button className='text-center p-4 w-32 bg-blue-900 rounded-xl text-xl' type='submit'>
                        Registrar
                    </button>
                </div>

            </div>
        </form>
    )
};
