import CardPost from "./CardPost";
import postsData from "../../assets/bestPosts.json";

const BestPostsComponent = () => {
  return (
    <>
      <h3 className="text-white text-lg font-bold font-playfair px-2">
        Ultimas publicaciones
      </h3>
      <div className="flex flex-col overflow-y-scroll">
        {postsData.map((post) => {
          return <CardPost post={post} />;
        })}
      </div>
    </>
  );
};

export default BestPostsComponent;
