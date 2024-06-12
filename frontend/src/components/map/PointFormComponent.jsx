import { useState } from "react";
import { postNewPoint } from "../../api/points";
import { useForm } from "../../hooks/useForm";
import PostButtonComponent from "../general/PostButtonComponent";
import { POINT_TYPE } from "../../utils/enums";

const ADMIN_ID = import.meta.env.VITE_ADMIN_ID || 1;

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
  const [backError, setBackError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("fishing");

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setBackError(null);
    const newPoint = {
      name:
        type === POINT_TYPE["fish"]
          ? formState["name"]
          : JSON.stringify({ type, name: formState["name"] }),
      description: formState["description"],
      latitude: point.lat,
      longitude: point.lng,
      id_user: ADMIN_ID,
      state: "active",
    };
    setData((prev) => [
      ...prev,
      { ...newPoint, latitude: point.lat, longitude: point.lng },
    ]);
    try {
      await postNewPoint(newPoint);
      onCancel();
    } catch (error) {
      setBackError("An error ocurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg">Datos del punto</h3>
      {backError && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Task failed successfully.</span>
        </div>
      )}
      <form method="dialog">
        <div>
          <div className="label">
            <span className="label-text">Tipo:</span>
          </div>
          <select
            value={type}
            onChange={handleChangeType}
            className="select select-bordered w-full"
          >
            {Object.keys(POINT_TYPE).map((kry) => {
              return <option value={POINT_TYPE[kry]}>{POINT_TYPE[kry]}</option>;
            })}
          </select>
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
        <div className="flex justify-between">
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
        <PostButtonComponent
          loading={loading}
          disabled={loading || !validForm}
          onClick={handleSubmit}
          className="w-36"
        />
        <button className="btn">Close</button>
      </form>
    </div>
  );
};

export default PointFormComponent;
