const mostVisitedPlaces = [
  {
    name: "Buenos Aires",
    postsNumber: 20,
  },
  {
    name: "Rio Negro",
    postsNumber: 50,
  },
  {
    name: "Rio de la Plata",
    postsNumber: 50,
  },
];

const PuntoInteres = () => {
  return (
    <div className="flex bg-custom-dark rounded-xl">
      <div className="py-2 px-4 flex flex-col items-center flex-1">
        <h4 className="text-white text-lg pb-2 text-center">
          Lugares mas Visitados en esta temporada
        </h4>
        <div className="flex flex-col text-white pb-1">
          <p className="text-sm text-center">¿Qué esperas para visitarlos?.</p>
        </div>
        {mostVisitedPlaces.map((place) => {
          return <MostVisitedPlaceCard placeInfo={place} key={place.name} />;
        })}
      </div>
      <div className="hidden lg:flex lg:w-40 max-w-40 justify-center items-center ">
        <div className="w-full h-full">
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

const MostVisitedPlaceCard = ({ placeInfo }) => {
  return (
    <div className="flex w-full text-gray-200 bg-zinc-600/35 mb-4 rounded-xl px-3 py-2">
      <div className="pr-2 flex-1">
        <h5 className="text-lg font-bold">{placeInfo.name}</h5>
        <p className="text-sm">{`${placeInfo.postsNumber} Publicaciones`}</p>
      </div>
      <div className="flex items-center">
        <button className="rounded-lg bg-black w-14 items-center h-12">
          <p className="text-center text-white">Ver</p>
        </button>
      </div>
    </div>
  );
};
