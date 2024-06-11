import appApi from "../../api/axios";
import { useForm } from "../../hooks/useForm";

const initialState = {
  name: "",
  description: "",
};

const formValidations = {
  name: [(value) => value.length > 1 && value.length < 128, "Invalid value"],
  description: [
    (value) => value.length > 1 && value.length < 512,
    "Invalid value",
  ],
};

const PointFormComponent = ({ point, setData, onCancel }) => {
  const { formState, onInputChange, validForm } = useForm(
    initialState,
    formValidations
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPoint = {
      ...formState,
      latitude: point.lat,
      longitude: point.lng,
      id_user: 1,
      state: "active",
    };
    setData((prev) => [
      ...prev,
      { ...newPoint, latitud: point.lat, longitud: point.lng },
    ]);
    await appApi.post("/pointOfInterest", newPoint);
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
              name="name"
              value={formState["name"]}
              onChange={onInputChange}
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
                <span className="label-text">Longitud:</span>
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
              name="description"
              value={formState["description"]}
              onChange={onInputChange}
            ></textarea>
          </div>
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={!validForm}
          >
            Guardar
          </button>
          <button className="btn">Close</button>
        </form>
      </div>
    </div>
  );
};

export default PointFormComponent;
