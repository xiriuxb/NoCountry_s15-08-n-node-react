import useParsePoint from "../../hooks/useParsePoint";

const NewPointInfoComponent = ({ point, onCancel, onAccept }) => {
  const parsedPoint = useParsePoint(point);
  return (
    <div className="card w-52 translate-x-[-50%] lg:translate-x-0 left-1/2 right-1/2 p-2 bg-neutral text-neutral-content absolute bottom-1 self-center">
      <div className="card-body p-2 items-center text-center">
        {parsedPoint.name && <p>{parsedPoint.name}</p>}
        {!parsedPoint.name && (
          <p>
            {parseFloat(parsedPoint.lat).toFixed(4)}... ;{" "}
            {parseFloat(parsedPoint.lng).toFixed(4)}...
          </p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onAccept}>
            {parsedPoint.name ? "Editar" : "Crear"}
          </button>
          <button className="btn btn-ghost" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPointInfoComponent;
