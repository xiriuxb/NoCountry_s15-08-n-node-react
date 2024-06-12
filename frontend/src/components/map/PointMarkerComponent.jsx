import { useMemo } from "react";
import { Marker } from "react-map-gl";
import { FaStore } from "react-icons/fa6";
import { useMapStore } from "../../context/mapStore";
import { POINT_TYPE } from "../../utils/enums";
import { parsePoint } from "../../utils/functions";

const PointMarkerComponent = ({ point, zoomBreakpoint, onClick }) => {
  const setSelectedPoint = useMapStore((state) => state.setSelectedPoint);
  const selectedPoint = useMapStore((state) => state.selectedPoint);
  const setNewPoint = useMapStore((state) => state.setNewPoint);

  const parsedPoint = useMemo(() => parsePoint(point), [point]);

  const handleClic = (e) => {
    e.originalEvent.stopPropagation();
    if (zoomBreakpoint != 2) return;
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
      latitude={point.latitude}
      longitude={point.longitude}
    >
      <button
        className={`flex justify-center items-center transition-all rounded-[50%] border-slate-200 border-2 ${
          parsedPoint.type && parsedPoint.type == POINT_TYPE["est"]
            ? "bg-orange-400"
            : "bg-blue-700"
        } ${zoomBreakpoint != 1 ? "h-6 w-6" : "h-3 w-3"} ${
          selectedPoint &&
          selectedPoint.id_point_interest == point.id_point_interest &&
          "shadow-[0_0_0_1.5rem_#6c6e6e9e]"
        }`}
      >
        {zoomBreakpoint != 1 && (
          <>
            {parsedPoint.type && parsedPoint.type == POINT_TYPE["est"] ? (
              <FaStore fill="#fff" />
            ) : (
              <img className="h-4" src="/hook.svg" alt="" />
            )}
          </>
        )}
      </button>
    </Marker>
  );
};

export default PointMarkerComponent;
