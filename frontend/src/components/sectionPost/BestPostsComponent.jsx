import { useEffect, useState } from "react";
import CardPost from "./CardPost";
import { getPublications } from "../../api/posts";
import SkeletonCardComponent from "../general/SkeletonCardComponent";

const BestPostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPublications();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error("Error loading publications:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h3 className="text-white text-lg font-bold font-playfair px-2">
        Últimas publicaciones
      </h3>
      <div className="flex flex-col overflow-y-scroll">
        {loading && <SkeletonCardComponent />}
        {posts.map((post) => (
          <CardPost key={post.id_publication} post={post} />
        ))}
      </div>
    </>
  );
};

export default BestPostsComponent;

