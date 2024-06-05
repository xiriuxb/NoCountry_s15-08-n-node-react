import { useEffect, useRef } from "react";
import { IoIosClose } from "react-icons/io";
import { useMapStore } from "../../context/mapStore";
import CardPost from "./CardPost";

const PointPostsComponents = () => {
  const selectedPoint = useMapStore((state) => state.selectedPoint);
  const setSelectedPoint = useMapStore((state) => state.setSelectedPoint);
  const divRef = useRef();

  useEffect(() => {
    if (divRef && divRef.current) {
      divRef.current.scrollTop = 0;
    }
  }, [selectedPoint]);

  const handleCloseButton = (e) => {
    setSelectedPoint(null);
  };

  return (
    <div className="w-full flex flex-col bg-slate-800 rounded-2xl overflow-hidden">
      <div className="flex flex-row w-full justify-between items-center py-1 px-3 shadow-[#4a4a4a3b_0px_13px_8px_-4px]">
        <h3
          title={selectedPoint.descripcion}
          className="flex-1 text-ellipsis-nowrap"
        >
          {selectedPoint.descripcion}
        </h3>
        <button
          title="close"
          onClick={handleCloseButton}
          className="self-end btn btn-circle bg-slate-600 text-3xl text-white"
        >
          <IoIosClose />
        </button>
      </div>
      <div
        ref={divRef}
        className="flex flex-col h-full overflow-y-auto items-center"
      >
        <PlaceInfoComponent />
      </div>
      <button className="btn bg-slate-600 text-white w-[95%] self-center my-1">
        Nueva Publicación
      </button>
    </div>
  );
};

export default PointPostsComponents;

const PlaceInfoComponent = () => {
  const selectedPoint = useMapStore((state) => state.selectedPoint);
  return (
    <>
      <h3>{selectedPoint.nombreLugar}</h3>
      <img
        className="w-[70%] h-40 object-cover rounded-lg"
        src="https://billiken.lat/wp-content/uploads/2022/01/rio-de-la-plata-20-1024x768.jpeg"
        alt="Rio de la Plata"
      />
    </>
  );
};
