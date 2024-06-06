import data from "../../assets/mapPoints.json";
import MapComponent from "../../components/map/MapComponent";
import InfoPeces from "../../components/infoPeces/InfoPeces";
import SectionPost from "../../components/sectionPost/SectionPost";
import { useState } from "react";
import { useMapStore } from "../../context/mapStore";
import CreatePostComponent from "../../components/sectionPost/CreatePostComponent";

const MapPage = () => {
  const selectedPoint = useMapStore((state) => state.selectedPoint);
  const [isHidden, setIsHidden] = useState(true);

  const handleSelectMarker = () => {
    if (selectedPoint && !isHidden) return;
    if (selectedPoint && isHidden) {
      setIsHidden(false);
      return;
    }
    if (!selectedPoint && !isHidden) return;
    if (!selectedPoint && isHidden) {
      setIsHidden(false);
    }
  };

  return (
    <main className="w-full h-screen max-w-screen-2xl pt-16 flex flex-row overflow-hidden">
      <section className="grid grid-cols-4 grid-rows-5 gap-4 w-2/3 h-full flex-1">
        <div id="map-container" className="col-span-4 row-span-3">
          <MapComponent data={data} onMarkerClic={handleSelectMarker} />
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-4 bg-slate-700">
          <InfoPeces />
        </div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-4 bg-gray-300">
          10
        </div>
      </section>
      <section
        style={{ transition: "width 0.3s ease" }}
        className={`overflow-hidden max-h-[calc(100vh-4rem)] ${
          isHidden ? "w-16" : "w-[30rem]"
        }`}
      >
        <SectionPost isHidden={isHidden} setIsHidden={setIsHidden} />
      </section>
      {selectedPoint && (
        <>
          <CreatePostComponent />
        </>
      )}
    </main>
  );
};

export default MapPage;
