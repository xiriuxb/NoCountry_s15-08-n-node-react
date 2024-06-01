const InfoPeces = () => {
    return (
        <div className='w-full h-full p-1'>
            <div className='flex'>
                <div className='flex w-full p-3 text-center text-white justify-center'>
                    <div className='w-20'>
                        <img src='./public/otoño.jpg' className='text-left' />
                    </div>
                    <div className='w-8/4 flex-col pl-2'>
                        <h2 className='text-lg text-left'>Otoño</h2>
                        <p className='text-sm text-left w-1/2'>La mejor temporada de pesca de salmon </p>
                    </div>
                </div>
                <div className='w-2/4 pt-1 pr-1 flex'>
                    <div className='w-3/4 p-2 '>
                        <img src='./public/salmon.jpg' className='w-full h-10' />
                        <p className='text-lg text-center'>Salmon</p>
                        <p className='text-sm text-center'>Encontrada en Rio Negro</p>
                    </div>
                    <div className='w-3/4 p-2 pl-6'>
                        <img src='./public/carite.jpg' className='w-full h-10' />
                        <p className='text-lg text-center'>Carite</p>
                        <p className='text-sm text-center'>Encontrada en Pilar</p>
                    </div>
                </div>
            </div>
            <div className='w-3/4'>
                <div className='mx-10'>
                    <h3 className="text-lg text-left">Las herramientas más usadas para estas especies</h3>
                </div>
                <div className='flex w-full ml-10 justify-betweem'>
                    <div className='w-1/3 pt-4 flex-col mx-10'>
                        <img src='./public/caña.jpg' className='w-20 h-24 ml-8'/>
                        <h3 className='pt-4 text-center text-lg'>Caña Madera</h3>
                        <p className='text-sm text-center w-30'>Más rústico para peces rápidos</p>
                    </div>
                    <div className='flex-col w-1/3 pt-4 mx-10'>
                        <img src='./public/botas.jpg' className= 'w-20 h-24 ml-8'/>
                        <h3 className='pt-4 text-center text-lg'>Botas de ule</h3>
                        <p className='text-sm text-center'>Resistentes al agua</p>
                    </div>
                    <div className='flex-col pt-4 ml-10 w-1/3'>
                        <img src='./public/anzuelo.jpg' className='w-20 h-24 ml-8'/>
                        <h3 className='pt-4 text-center text-lg'>Anzuelo</h3>
                        <p className='text-sm text-center'>Pieza de madera con olor para atraer peces</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InfoPeces;