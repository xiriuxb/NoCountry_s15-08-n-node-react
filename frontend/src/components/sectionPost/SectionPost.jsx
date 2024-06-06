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
      <div className="flex flex-col items-center p-2 gap-1 h-full">
        <div className={`flex w-full ${isHidden ? "flex-col" : "flex-row-reverse"}`}>
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
          <div className="w-screen sm:w-[26rem] flex flex-col p-1 overflow-hidden">
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
      className={`flex justify-end w-full items-center ${
        isHidden ? "flex-col-reverse py-2 " : "flex-row px-2"
      }`}
    >
      <h3
        className={`font-bold font-playfair ${
          isHidden ? "text-sm" : "text-3xl px-3"
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
