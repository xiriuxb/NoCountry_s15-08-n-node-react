import dataPoints from "../../assets/mapPoints.json";
import MapComponent from "../../components/map/MapComponent";
import InfoPeces from "../../components/infoPeces/InfoPeces";
import SectionPost from "../../components/sectionPost/SectionPost";
import { useEffect, useState } from "react";
import { useMapStore } from "../../context/mapStore";
import CreatePostComponent from "../../components/sectionPost/CreatePostComponent";
import PuntoInteres from "../../components/PointOfInterest/PuntoInteres";
import { getPointsData } from "../../api/points";

const MapPage = () => {
  const selectedPoint = useMapStore((state) => state.selectedPoint);
  const [isHidden, setIsHidden] = useState(true);
  const [data, setData] = useState(dataPoints);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const points = await getPointsData();
    setData((prev) => [...prev, ...points]);
  };

  const handleSelectMarker = () => {
    if (selectedPoint && !isHidden) return;
    if (selectedPoint && isHidden) {
      console.log(selectedPoint);
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
      <section className="grid grid-cols-4 grid-rows-5 gap-4 w-2/3 h-full flex-1 overflow-y-auto overflow-x-hidden">
        <div id="map-container" className="col-span-4 row-span-5 md:row-span-3">
          <MapComponent data={data} onMarkerClic={handleSelectMarker} />
        </div>
        <div className="hidden md:block md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-4">
          <InfoPeces />
        </div>
        <div className="hidden md:block md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4">
          <PuntoInteres />
        </div>
      </section>
      <section
        style={{ transition: "width 0.3s ease" }}
        className={`overflow-hidden max-h-[calc(100vh-4rem)] ${
          isHidden ? "w-16" : "w-screen sm:w-[28rem]"
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
