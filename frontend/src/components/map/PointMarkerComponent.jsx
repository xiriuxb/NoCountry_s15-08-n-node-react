import { Marker } from "react-map-gl";
import { useMapStore } from "../../context/mapStore";

const PointMarkerComponent = ({ point, zoomBreakpoint, onClick }) => {
  const setSelectedPoint = useMapStore((state) => state.setSelectedPoint);
  const selectedPoint = useMapStore((state) => state.selectedPoint);
  const setNewPoint = useMapStore((state) => state.setNewPoint);

  const handleClic = (e) => {
    e.originalEvent.stopPropagation();
    if(zoomBreakpoint!=2) return;
    setNewPoint(null);
    setSelectedPoint(point);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Marker
      onClick={(e) => {
        handleClic(e);
      }}
      anchor="bottom"
      latitude={point.latitud}
      longitude={point.longitud}
    >
      <button
        className={`transition-all rounded-[50%] bg-blue-700 border-slate-200 border-2 ${
          zoomBreakpoint != 1 ? "h-6 w-6" : "h-3 w-3"
        } ${(selectedPoint && selectedPoint.id == point.id) && 'shadow-[0_0_0_1.5rem_#6c6e6e9e]'}`}
      ></button>
    </Marker>
  );
};

export default PointMarkerComponent;
