import { useEffect, useState } from "react";
import { useMapStore } from "../../context/mapStore";
import pointsJson from "../../assets/mapPoints.json";
import MapComponent from "../../components/map/MapComponent";
import PointFormComponent from "../../components/map/PointFormComponent";
import MapModalLayout from "../../components/map/MapModalLayout";
import NewPointInfoComponent from "../../components/map/NewPointInfoComponent";
import { getPointsData } from "../../api/points";

const MapAdminView = () => {
  const newPoint = useMapStore((state) => state.newPoint);
  const setNewPoint = useMapStore((state) => state.setNewPoint);
  const [data, setData] = useState(pointsJson);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const points = await getPointsData();
    setData([...data, ...points]);
  };

  const handleClicNewPoint = (e) => {
    if (import.meta.env.VITE_USER_ROLE != "admin") return;
    if (!newPoint) {
      setNewPoint({ lat: e.lngLat.lat, lng: e.lngLat.lng });
      return;
    }
    setNewPoint(null);
  };

  return (
    <section id="map" className="w-full h-screen max-h-screen">
      <MapComponent data={data} onNewPointCick={handleClicNewPoint} />
      {newPoint && (
        <NewPointInfoComponent
          point={newPoint}
          onCancel={handleClicNewPoint}
          onAccept={() =>
            document.getElementById("admin_map_modal_1").showModal()
          }
        />
      )}
      {newPoint && (
        <MapModalLayout>
          <PointFormComponent
            point={newPoint}
            setData={setData}
            onCancel={handleClicNewPoint}
          />
        </MapModalLayout>
      )}
    </section>
  );
};

export default MapAdminView;
