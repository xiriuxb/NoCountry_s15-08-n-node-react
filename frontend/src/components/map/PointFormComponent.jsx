const PointFormComponent = ({ point, setData, onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [...prev, { Latitud: point.lat, Longitud: point.lng }]);
    onCancel();
  };

  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg">Datos del punto</h3>
      <div className="modal-action mt-0">
        <form method="dialog">
          <div>
            <div className="label">
              <span className="label-text">Name:</span>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-info w-full"
            />
          </div>
          <div className="flex">
            <div>
              <div className="label">
                <span className="label-text">Latitud:</span>
              </div>
              <input
                type="text"
                placeholder="Latitud"
                className="input input-bordered input-info w-full max-w-xs"
                value={point.lat}
                disabled
              />
            </div>
            <div>
              <div className="label">
                <span className="label-text">Longituds:</span>
              </div>
              <input
                type="text"
                placeholder="Longitud"
                className="input input-bordered input-info w-full max-w-xs"
                value={point.lng}
                disabled
              />
            </div>
          </div>
          <div>
            <div className="label">
              <span className="label-text">Descripción:</span>
            </div>
            <textarea
              className="textarea textarea-accent w-full"
              placeholder="Descripción"
            ></textarea>
          </div>
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-primary" onClick={handleSubmit}>
            Guardar
          </button>
          <button className="btn">Close</button>
        </form>
      </div>
    </div>
  );
};

export default PointFormComponent;