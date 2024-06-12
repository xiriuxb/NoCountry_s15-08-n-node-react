import { useRef, useState } from "react";
import { useMapStore } from "../../context/mapStore";
import { FaStar } from "react-icons/fa";
import { useForm } from "../../hooks/useForm";
import { postNewPublication } from "../../api/posts";
import PostButtonComponent from "../general/PostButtonComponent";

const FISHER_ID = import.meta.env.VITE_FISHER_ID || 1;

const adjustTextareaHeight = (textarea) => {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
};

const handleCloseModalLabel = () => {
  document.getElementById("close_user_modal").click();
};

const formValidations = {
  description: [
    (value) => value.length > 4 && value.length < 512,
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
  const [backError, setBackError] = useState(null);
  const [loading, setLoading] = useState(false);
  const imgInputRef = useRef(null);
  const { description, onInputChange, validForm, formState, onResetForm } =
    useForm(initialValues, formValidations);

  const handleCloseModal = () => {
    setLoading(false);
    setBackError(null);
    handleCloseModalLabel();
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleClearFileInput = () => {
    if (imgInputRef && imgInputRef.current) {
      imgInputRef.current.value = "";
      setSelectedImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setBackError(null);
    const data = {
      id_user: FISHER_ID,
      id_point_interest: selectedPoint.id_point_interest,
      description,
      rating,
      image: selectedImage,
    };
    try {
      await postNewPublication(data);
      handleClearFileInput();
      onResetForm();
      handleCloseModal();
    } catch (error) {
      setBackError("Error creating");
      setLoading(false);
    }
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
              className="hidden"
            ></label>
            <button
              className="btn btn-circle btn-ghost font-bold text-3xl"
              onClick={handleCloseModal}
              disabled={loading}
            >
              ×
            </button>
          </div>
          <div className="p-3 flex flex-col overflow-hidden">
            <h4 className="py-2">{`${selectedPoint.name}`}</h4>
            {backError && (
              <div role="alert" className="alert alert-error">
                <span>{backError}</span>
              </div>
            )}
            <form className="flex flex-col overflow-hidden" method="post">
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
                  <div className="relative">
                    <img
                      className="w-full"
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected Image"
                    />
                    <button
                      className="absolute top-0 btn btn-circle btn-ghost font-bold text-3xl bg-slate-800/50 m-2"
                      onClick={handleClearFileInput}
                      disabled={loading}
                    >
                      ×
                    </button>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input file-input-bordered file-input-md w-full bg-slate-500"
                  ref={imgInputRef}
                />
              </div>
              <PostButtonComponent
                disabled={loading || !validForm}
                loading={loading}
                onClick={handleSubmit}
                text="Publicar"
                className="w-full"
              />
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
