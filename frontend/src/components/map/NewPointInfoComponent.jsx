const NewPointInfoComponent = ({ point, onCancel, onAccept }) => {
  return (
    <div className="card w-52 translate-x-[-50%] lg:translate-x-0 left-1/2 right-1/2 p-2 bg-neutral text-neutral-content absolute bottom-1 self-center">
      <div className="card-body p-2 items-center text-center">
        <p>
          {parseFloat(point.lat).toFixed(4)}... ;{" "}
          {parseFloat(point.lng).toFixed(4)}...
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onAccept}>
            Crear
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
