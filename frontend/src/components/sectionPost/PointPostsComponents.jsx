import { useEffect, useMemo, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useMapStore } from "../../context/mapStore";
import { getPointPublications } from "../../api/posts";
import CardPost from "./CardPost";
import SkeletonCardComponent from "../general/SkeletonCardComponent";
import CreatePostComponent from "./CreatePostComponent";
import { parsePoint } from "../../utils/functions";

const PointPostsComponents = () => {
  const selectedPoint = useMapStore((state) => state.selectedPoint);
  const setSelectedPoint = useMapStore((state) => state.setSelectedPoint);
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState([]);
  const divRef = useRef();

  const handleOpenModal = () => {
    document.getElementById("user_modal_open").click();
  };

  const parsedPoint = useMemo(() => parsePoint(selectedPoint), [selectedPoint]);

  const getPostsInfo = async () => {
    setLoading(true);
    try {
      const data = await getPointPublications(selectedPoint.id_point_interest);
      setPostData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (divRef && divRef.current) {
      divRef.current.scrollTop = 0;
    }
    getPostsInfo();
  }, [selectedPoint]);

  useEffect(() => {
    if (divRef && divRef.current) {
      divRef.current.scrollTop = 0;
    }
  }, [postData]);

  const handleCloseButton = (e) => {
    setSelectedPoint(null);
  };

  const handleAfterAddPublication = (newPublication) => {
    setPostData([...postData, newPublication]);
  };

  return (
    <div className="w-full flex flex-col rounded-2xl overflow-hidden">
      <div className="flex flex-row w-full justify-between items-center py-1 px-3 shadow-[#4a4a4a3b_0px_13px_8px_-4px]">
        <h3 title={parsedPoint.name} className="flex-1 text-ellipsis-nowrap">
          {parsedPoint.name}
        </h3>
        <button
          title="close"
          onClick={handleCloseButton}
          className="self-end btn btn-circle bg-[#3d4451] text-3xl text-white"
        >
          <IoIosClose />
        </button>
      </div>
      <div
        ref={divRef}
        className="flex flex-col h-full overflow-y-auto items-center"
      >
        <PlaceInfoComponent />
        <div className="w-full h-screen">
          {!loading &&
            postData &&
            postData
              .slice()
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((post) => {
                return <CardPost post={post} />;
              })}
          {loading && <SkeletonCardComponent />}
        </div>
      </div>
      <button
        onClick={handleOpenModal}
        className="btn bg-[#1f2937] text-white w-[95%] self-center my-1"
      >
        Nueva Publicación
      </button>
      {selectedPoint && (
        <>
          <CreatePostComponent handleAfterCreate={handleAfterAddPublication} />
        </>
      )}
    </div>
  );
};

export default PointPostsComponents;

const PlaceInfoComponent = () => {
  const selectedPoint = useMapStore((state) => state.selectedPoint);
  return (
    <>
      <h3>{selectedPoint.description}</h3>
      <img
        className="w-[70%] h-40 object-cover rounded-lg"
        src="https://billiken.lat/wp-content/uploads/2022/01/rio-de-la-plata-20-1024x768.jpeg"
        alt="Rio de la Plata"
      />
    </>
  );
};
