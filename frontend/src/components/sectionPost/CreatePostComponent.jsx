import { useState } from "react";
import { useMapStore } from "../../context/mapStore";
import { FaStar } from "react-icons/fa";
import { useForm } from "../../hooks/useForm";

const adjustTextareaHeight = (textarea) => {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
};

const handleCloseModal = () => {
  document.getElementById("close_user_modal").click();
};

const formValidations = {
  description: [
    (value) => value.length > 1 && value.length < 512,
    "Invalid value",
  ],
};

const initialValues = {
  description: "",
};

const CreatePostComponent = () => {
  const selectedPoint = useMapStore((state) => state.selectedPoint);
  const [selectedImage, setSelectedImage] = useState(null);
  const [rating, setRating] = useState(1);
  const { description, onInputChange, validForm, formState, onResetForm } =
    useForm(initialValues, formValidations);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedImage(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      idPuntointeres: selectedPoint.id,
      descripcion: description,
      rating,
      foto: selectedImage ? URL.createObjectURL(selectedImage) : null,
    };
    console.log(data);
    onResetForm();
    handleCloseModal();
  };

  return (
    <section>
      <label id="user_modal_open" htmlFor="user_modal" className="btn hidden">
        open modal
      </label>

      <input type="checkbox" id="user_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-slate-600 text-gray-200 p-0 max-h-[90vh] flex flex-col">
          <div
            id="modal_title"
            className="h-14 border-b border-b-slate-400 pl-5 pr-1 py-2 flex items-center"
          >
            <h3 className="font-bold text-lg flex-1">Deja tu comentario!</h3>
            <label
              id="close_user_modal"
              htmlFor="user_modal"
              className="btn btn-circle btn-ghost font-bold text-3xl"
            >
              ×
            </label>
          </div>
          <div className="p-3 flex flex-col overflow-hidden">
            <h4 className="py-2">{`${selectedPoint.nombreLugar}`}</h4>
            <form
              className="flex flex-col overflow-hidden"
              onSubmit={handleSubmit}
              method="post"
            >
              <div className="overflow-y-auto">
                <label>Rating: </label>
                <RatingSelector defaultValue={rating} onChange={setRating} />
                <textarea
                  name="description"
                  className="textarea textarea-bordered overflow-hidden w-full resize-none mt-2 bg-slate-500"
                  placeholder="Bio"
                  value={formState["description"]}
                  onChange={(e) => {
                    onInputChange(e);
                    adjustTextareaHeight(e.target);
                  }}
                ></textarea>
                {selectedImage && (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected Image"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input file-input-bordered file-input-md w-full bg-slate-500"
                />
              </div>
              <input
                type="submit"
                value={"Publicar"}
                disabled={!validForm}
                className="btn btn-primary w-full mt-2"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const RatingSelector = ({ defaultValue = 0, onChange }) => {
  const [rating, setRating] = useState(defaultValue);

  const handleStarClick = (value) => {
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex flex-row">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={starValue} onClick={() => handleStarClick(starValue)}>
            {
              <FaStar
                className={` ${
                  starValue <= rating ? "fill-yellow-400" : "fill-slate-300"
                }`}
              />
            }
          </span>
        );
      })}
    </div>
  );
};

export default CreatePostComponent;
