import CardPost from "../sectionPost/CardPost";

const SectionBestPost = () => {
  return (
    <div className="w-full h-[100%] flex flex-col items-center bg-black p-2 gap-2">
      <div className="w-[90%] h-[20%] ">
        <div className="text-white text-3xl font-bold font-playfair bg-slate-700 ">
            <h2>Mejores publicaciones</h2>
            <p className="text-sm">Las Mejores publicaciones</p>
        </div>
      </div>
      <div className="w-[90%] h-[80%] gap-2">
        <CardPost/>
        <CardPost/>
        <CardPost/>
      </div>
    </div>
  );
};

export default SectionBestPost;
