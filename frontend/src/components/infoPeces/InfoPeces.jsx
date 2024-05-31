import React from 'react';

export const InfoPeces = () => {
    return (
        <div className='bg-black w-1/2'>
            <div className='flex'>
                <div className='flex w-2/3 p-6 text-center text-white justify-center'>
                    <div className='m-1 w-30'>
                        <img src='./public/otoño.jpg' className='text-left pr-5' />
                    </div>
                    <div className='w-3/4 flex-col pt-9'>
                        <h2 className='text-2xl text-left'>Otoño</h2>
                        <p className='text-l text-left w-1/2'>La mejor temporada de pesca de salmon </p>
                    </div>
                </div>
                <div className='w-2/4 pt-6 pr-2 flex'>
                    <div className='w-3/4 p-6'>
                        <img src='./public/salmon.jpg' className='w-2/3 h-20' />
                        <p className='text-xl text-left'>Salmon</p>
                        <p className='text-l text-center w-2/3'>Encontrada en Rio Negro</p>
                    </div>
                    <div className='w-3/4 p-6'>
                        <img src='./public/carite.jpg' className='w-2/3 h-20' />
                        <p className='text-xl text-left'>Carite</p>
                        <p className='text-l text-center w-2/3'>Encontrada en Pilar</p>
                    </div>
                </div>
            </div>
            <div className='w-3/4 justify-center'>
                <div className='text-2xl text-left ml-10'>
                    <h3>Las herramientas más usadas para estas especies</h3>
                </div>
                <div className='flex w-full m-4 ml-10'>
                    <div className='flex-col m-10'>
                        <img src='./public/caña.jpg' className='w-30 h-40'/>
                        <h3 className='pt-4 text-center text-xl'>Caña Madera</h3>
                        <p className='text-l text-left'>Más rústico para peces rápidos</p>
                    </div>
                    <div className='flex-col m-10'>
                        <img src='./public/botas.jpg' className='w-30 h-40'/>
                        <h3 className='pt-4 text-center text-xl'>Botas de ule</h3>
                        <p className='text-l text-left'>Resistentes al agua</p>
                    </div>
                    <div className='flex-col m-10'>
                        <img src='./public/anzuelo.jpg' className='w-30 h-40'/>
                        <h3 className='pt-4 text-center text-xl'>Anzuelo</h3>
                        <p className='text-l text-left'>Pieza de madera con olor para atraer peces</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
