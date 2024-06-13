import { useEffect } from "react";
import FishInfoService from "../../services/fishInfo";
import { useState } from "react";

const tools = [
  {
    name: "Caña Madera",
    description: "Más rústico para peces rápidos",
    img: "/caña.jpg",
  },
  {
    name: "Botas de ule",
    description: "Resistentes al agua",
    img: "/botas.jpg",
  },
  {
    name: "Anzuelo",
    description: "Pieza de madera con olor para atraer peces",
    img: "/anzuelo.jpg",
  },
];

const fishes = [
  {
    name: "Salmon",
    description: "En Rio Negro",
    img: "/Salmon.jpg",
  },
  {
    name: "Carite",
    description: "En Pilar",
    img: "/carite.jpg",
  },
];

const InfoPeces = () => {
  const [fishes, setFishes] = useState([]);
  const [tip, setTip] = useState({ description: "La mejor temporada de pesca de salmon " });

  useEffect(() => {
    FishInfoService.fetchFishData()
      .then((data) => setFishes(data))
      .catch((error) => console.log(error));

    FishInfoService.fetchGetTipById(3)
      .then((data) => setTip(data)) // Aquí actualizamos el estado de 'tip'
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="p-6 bg-custom-dark text-white rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="flex p-2 bg-zinc-900/50 rounded-md items-end w-5/12">
          <div className="h-full">
            <img src="/otoño.jpg" className="rounded-md h-full object-cover" />
          </div>
          <div className="flex-col pl-2">
            <div className="">
              <h5 className="font-bold pb-36 text-center px-3 text-gray-200/45">Consejo</h5>
            </div>
            <h4 className="text-lg text-left font-bold">Otoño</h4>
            <p className="text-sm text-left">{tip.description}</p>
          </div>
        </div>
        <div className="flex flex-1 items-center">
          {fishes.map((fish) => {
            return <FishDescComponent fishInfo={fish} key={fish.name} />;
          })}
        </div>
      </div>
      <div className="w-full">
        <div>
          <h3 className="py-2 text-lg font-bold text-center">
            Las herramientas más usadas para estas especies
          </h3>
        </div>
        <div className="flex w-full flex-wrap justify-around">
          {tools.map((tool) => {
            return <ToolDescComponent key={tool.name} toolInfo={tool} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default InfoPeces;

const ToolDescComponent = ({ toolInfo }) => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-col justify-start p-1 my-3 w-full md:w-1/2 md:max-w-40 md:min-w-40 bg-zinc-500/10 rounded-md">
      <img src={toolInfo.img} className="rounded-md h-24 max-h-24" />
      <div className="flex flex-col p-1 w-full">
        <h5 className="text-center text-lg font-bold">{toolInfo.name}</h5>
        <p className="text-sm text-center">{toolInfo.description}</p>
      </div>
    </div>
  );
};

const FishDescComponent = ({ fishInfo }) => {
  return (
    <div className="w-3/4 p-2  m-2 h-full flex flex-col w-32 bg-zinc-500/10 rounded-md">
      <img
        src={fishInfo.img ? fishInfo.img : "/Salmon.jpg"}
        className="w-full rounded-md h-14 object-contain"
      />
      <article className="flex flex-col gap-4 px-1">
        <h5 className="text-sm font-bold text-center">{fishInfo.species_name}</h5>
        <p className="text-sm text-center text-zinc-500">{fishInfo.season}</p>
        <p className="text-sm text-pretty">{fishInfo.importance_sport_fishing}</p>
      </article>
    </div>
  );
};
