const PuntoInteres = () => {
    return (
        <div className="flex columns-2 bg-slate-900  w-full h-full font-playfair rounded-xl">
            <div className=" w-full p-2 flex flex-col items-center">
                <h1 className="text-white text-xl pt-2 pb-2">
                    Lugares mas Visitados en esta temporada
                </h1>
                <div className="flex flex-col text-white pl-4 pb-6">
                    <p className="text-base">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex text-black bg-white mb-4 rounded-xl ml-4">
                    <div className=" w-full">
                        <h2 className="text-lg pt-4 pl-4 font-bold">Rio Negro</h2>
                        <p className="text-base ml-4 pb-4">
                            50 Publicaciones sobre este lugar
                        </p>
                    </div>
                    <div className="flex columns-2 justify-end pr-4 pt-4">
                        <button className="rounded-lg bg-black w-14 items-center h-12">
                            <p className="text-center text-white">Ver</p>
                        </button>
                    </div>
                </div>
                <div className="flex text-black bg-white mb-4 rounded-xl ml-4">
                    <div className="columns-1 w-full">
                        <h2 className="text-lg text-left pt-4 pl-4 font-bold">
                            Buenos Aires
                        </h2>
                        <p className="text-base ml-4 pb-4">
                            20 Publicaciones sobre este lugar
                        </p>
                    </div>
                    <div className="flex columns-2 justify-end pr-4 pt-4">
                        <button className="rounded-lg bg-black w-14 items-center h-12">
                            <p className="text-center text-white">Ver</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center items-center ">
                <div className="w-[80%] h-full">
                    <img
                        className="w-full h-96 object-cover rounded-xl"
                        src="/imagenGPS.jpg"
                        alt="imagen"
                    />
                </div>
            </div>
        </div>
    );
};
export default PuntoInteres;