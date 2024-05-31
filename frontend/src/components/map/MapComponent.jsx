import { Map } from "react-map-gl";
import { useMapStore } from "../../context/mapStore";
import { useCallback, useEffect, useRef, useState } from "react";
import PointMarkerComponent from "./PointMarkerComponent";
import NewPointMarkerComponent from "./NewPointMarkerComponent";

const MAPBOX_KEY = import.meta.env.VITE_MAPBOX_KEY;

const INITIAL_VIEW_STATE = {
  longitude: parseFloat(import.meta.env.VITE_INITIAL_LONG) || -58.5525,
  latitude: parseFloat(import.meta.env.VITE_INITIAL_LAT) || -34.5807,
  zoom: 6.5,
};

const getZoomBreakPoints = (zoom) => {
  if (zoom >= 5 && zoom < 9) {
    return 1;
  }
  if (zoom >= 9) {
    return 2;
  }
  return 0;
};

const MapComponent = ({ type, data, onMarkerClic }) => {
  const mapRef = useRef();
  const newPoint = useMapStore((state) => state.newPoint);
  const selectedPoint = useMapStore((state) => state.selectedPoint);
  const setNewPoint = useMapStore((state) => state.setNewPoint);
  const [zoomBreakpoint, setZoomBreakpoint] = useState(
    getZoomBreakPoints(INITIAL_VIEW_STATE.zoom)
  );

  useEffect(() => {
    if (selectedPoint) {
      centerMapOnMarker();
    }
  }, [selectedPoint]);

  const centerMapOnMarker = useCallback(() => {
    if (mapRef && mapRef.current && selectedPoint) {
      const ease = 0.3;
      const duration = 700;

      mapRef.current.easeTo({
        center: [selectedPoint.longitud, selectedPoint.latitud],
        duration,
        easing: (t) => Math.pow(t, ease),
      });
    }
  },[data, selectedPoint]);

  const handleClicNewPoint = (e) => {
    if (import.meta.env.VITE_USER_ROLE != "admin") return;
    if (type != "admin") return;
    if (!newPoint) {
      setNewPoint({ lat: e.lngLat.lat, lng: e.lngLat.lng });
      return;
    }
    setNewPoint(null);
  };

  const handleZoomBreakpoint = (e) => {
    setZoomBreakpoint(getZoomBreakPoints(e.viewState.zoom));
  };

  return (
    <Map
      ref={mapRef}
      cursor="auto"
      onClick={handleClicNewPoint}
      mapboxAccessToken={MAPBOX_KEY}
      mapLib={import("mapbox-gl")}
      initialViewState={INITIAL_VIEW_STATE}
      onZoom={(e) => {
        handleZoomBreakpoint(e);
      }}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
    >
      {newPoint && (
        <NewPointMarkerComponent lat={newPoint.lat} lng={newPoint.lng} />
      )}
      {zoomBreakpoint != 0 &&
        data.map((point) => {
          return (
            <PointMarkerComponent
              point={point}
              zoomBreakpoint={zoomBreakpoint}
              key={point.id}
              onClick={onMarkerClic}
            />
          );
        })}
    </Map>
  );
};

export default MapComponent;
