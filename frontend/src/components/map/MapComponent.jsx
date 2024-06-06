import { Map, NavigationControl } from "react-map-gl";
import { useMapStore } from "../../context/mapStore";
import { useCallback, useEffect, useRef, useState } from "react";
import PointMarkerComponent from "./PointMarkerComponent";
import NewPointMarkerComponent from "./NewPointMarkerComponent";

const MAPBOX_KEY = import.meta.env.VITE_MAPBOX_KEY;

const INITIAL_VIEW_STATE = {
  longitude: parseFloat(import.meta.env.VITE_INITIAL_LONG) || -58.5525,
  latitude: parseFloat(import.meta.env.VITE_INITIAL_LAT) || -34.5807,
  zoom: parseFloat(import.meta.env.VITE_MAP_INITIAL_ZOOM) || 6.5,
};

const ZOOM_BREAKPOINTS = [
  parseFloat(import.meta.env.VITE_MAP_ZOOM_BK_1) || 5,
  parseFloat(import.meta.env.VITE_MAP_ZOOM_BK_2) || 8,
];

const getZoomBreakPoints = (zoom) => {
  if (zoom >= ZOOM_BREAKPOINTS[0] && zoom < ZOOM_BREAKPOINTS[1]) {
    return 1;
  }
  if (zoom >= ZOOM_BREAKPOINTS[1]) {
    return 2;
  }
  return 0;
};

const MapComponent = ({ data, onMarkerClic, onNewPointCick }) => {
  const mapRef = useRef();
  const newPoint = useMapStore((state) => state.newPoint);
  const selectedPoint = useMapStore((state) => state.selectedPoint);
  const [zoomBreakpoint, setZoomBreakpoint] = useState(
    getZoomBreakPoints(INITIAL_VIEW_STATE.zoom)
  );

  useEffect(() => {
    if (selectedPoint) {
      centerMapOnMarker();
    }
  }, [selectedPoint]);

  const handleResize = () => {
    if (mapRef && mapRef.current) {
      mapRef.current.getMap().resize();
    }
  };

  useEffect(() => {
    const mapContainer = document.getElementById("map-container");
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (mapContainer) {
      resizeObserver.observe(mapContainer);
    }

    return () => {
      if (mapContainer) {
        resizeObserver.unobserve(mapContainer);
      }
    };
  }, []);

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
  }, [data, selectedPoint]);

  const handleZoomBreakpoint = (e) => {
    setZoomBreakpoint(getZoomBreakPoints(e.viewState.zoom));
  };

  return (
    <Map
      contr
      ref={mapRef}
      cursor="auto"
      onClick={onNewPointCick}
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
      <NavigationControl />
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
