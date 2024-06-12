import { FaUser } from "react-icons/fa";
import { PiFishSimple } from "react-icons/pi";
import { FiMessageCircle } from "react-icons/fi";
import RatingComponent from "./RatingComponent";

const CardPost = ({ post }) => {
  return (
    <div className="bg-zinc-500/25 max-w-screen-sm w-auto sm:max-w-[26rem] sm:w-full max-h-[250px] rounded-lg p-2 mx-2 my-1">
      <div className="h-full max-h-full flex flex-col">
        <div className="flex items-center mb-1">
          <CardPostUserInfo
            userData={post.user}
            className="flex-1 cursor-pointer hover:bg-slate-700"
          />
          <RatingComponent ratingValue={post.rating} />
        </div>
        <div className="cursor-pointer hover:bg-slate-700 rounded-lg">
          <div className="flex flex-row max-h-40">
            <div className="w-1/2 bg-zinc-900/50 p-1 rounded-lg flex-1">
              <p
                className="text-white mx-1 text-ellipsis whitespace-normal overflow-hidden"
                style={{
                  WebkitBoxOrient: "vertical",
                  display: "-webkit-box",
                  WebKitLineClamp: "6",
                }}
              >
                {post.description}
              </p>
            </div>
            {post.image && (
              <div className="w-1/2">
                <img
                  className="rounded-lg w-full object-cover h-full"
                  src={post.image}
                  alt=""
                />
              </div>
            )}
          </div>
          <PostReactionsComponent className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default CardPost;

const CardPostUserInfo = ({ userData, className = "" }) => {
  return (
    <div
      className={`max-h-10 flex items-center text-white rounded-lg overflow-hidden ${className}`}
    >
      <div className="avatar">
        <div className="w-10 h-10 rounded-full">
          {userData && userData.urls ? (
            <img src={userData.urls[0]} />
          ) : (
            <FaUser className="w-full h-full" />
          )}
        </div>
      </div>
      <div className="w-full h-full flex pl-1 flex-col overflow-hidden">
        <h4
          title={userData ? `${userData.name} ${userData.last_name}` : ""}
          className="text-sm font-bold font-playfair text-ellipsis-nowrap"
        >
          {userData
            ? `${userData.name} ${userData.last_name}`
            : "Nombre Apellido"}
        </h4>
        <p className="text-[0.7rem] font-extralight">20 post(s)</p>
      </div>
    </div>
  );
};

const PostReactionsComponent = ({ className }) => {
  return (
    <div
      className={`text-sm flex flex-row justify-evenly text-white/50 ${className}`}
    >
      <span className="flex items-center space-x-2">
        <FiMessageCircle />
        <p>Comentarios</p>
      </span>
      <span className="flex items-center space-x-2">
        <PiFishSimple />
        <p>Likes</p>
      </span>
    </div>
  );
};
