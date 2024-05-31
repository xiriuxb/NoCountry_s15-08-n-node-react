import { Marker } from "react-map-gl";

const NewPointMarkerComponent = ({ lat, lng }) => {
  return (
    <>
      <Marker latitude={lat} longitude={lng}>
        <div className="w-5 h-5 rounded-full bg-slate-400 border-slate-100 border-2 shadow-xl shadow-slate-300"></div>
      </Marker>
    </>
  );
};

export default NewPointMarkerComponent;