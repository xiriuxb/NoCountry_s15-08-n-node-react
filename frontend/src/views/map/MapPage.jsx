import  data from "../../assets/mapPoints.json";
import MapComponent from "../../components/map/MapComponent";
const MapPage = () => {
  return (
    <main className="w-full h-screen pt-[80px]">
      <div className="grid grid-cols-5 grid-rows-5 gap-4 w-full h-full">
        <div className="col-span-4 row-span-3 "><MapComponent data={data}/></div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-4 bg-slate-700">TERESA</div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-4 bg-gray-300">10</div>
        <div className="row-span-5 col-start-5 row-start-1 bg-gray-200">2</div>
      </div>
    </main>
  );
};

export default MapPage;