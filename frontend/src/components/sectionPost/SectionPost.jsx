import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMapStore } from "../../context/mapStore";
import BestPostsComponent from "./BestPostsComponent";
import PointPostsComponents from "./PointPostsComponents";

const SectionPost = ({ isHidden, setIsHidden }) => {
  const selectedPoint = useMapStore((state) => state.selectedPoint);

  const handleHideButtonClick = (e) => {
    setIsHidden((prev) => !prev);
  };

  return (
    <section className="w-full h-full text-white">
      <div className="flex flex-col items-center bg-black p-2 gap-1 h-full">
        <div className={`flex w-full ${isHidden ? "flex-col" : "flex-row"}`}>
          <button
            id="button-map-drawer"
            onClick={handleHideButtonClick}
            className="btn max-w-11 bg-slate-600"
          >
            {isHidden ? (
              <FaArrowLeft fill="#fff" />
            ) : (
              <FaArrowRight fill="#fff" />
            )}
          </button>
          <div className="w-full">
            <UserInfoComponent isHidden={isHidden} />
          </div>
        </div>
        {!isHidden && selectedPoint && (
          <div className="w-full flex flex-col p-1 overflow-hidden">
            <PointPostsComponents />
          </div>
        )}
        {!isHidden && !selectedPoint && (
          <div className="flex flex-col overflow-hidden">
            <BestPostsComponent />
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionPost;

const UserInfoComponent = ({ isHidden }) => {
  return (
    <div
      className={`flex justify-end w-full ${
        isHidden ? "flex-col-reverse" : "flex-row"
      }`}
    >
      <h3
        className={`font-bold font-playfair px-3 ${
          isHidden ? "text-sm" : "text-3xl"
        }`}
      >
        Leo
      </h3>
      <div className="avatar">
        <div className="max-w-12 rounded-full">
          <img src="https://img.a.transfermarkt.technology/portrait/big/28003-1710080339.jpg?lm=1" />
        </div>
      </div>
    </div>
  );
};
