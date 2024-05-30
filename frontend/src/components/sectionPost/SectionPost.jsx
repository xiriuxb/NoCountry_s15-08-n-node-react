import CardPost from "./CardPost";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const SectionPost = () => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[500px] min-h-screen flex flex-col items-center bg-black p-2 gap-2">
        <div className="w-[90%] h-[400px]  flex flex-col  ">
          <div className="w-full h-[40%] flex">
            <div className="w-[30%] h-full">
              <button className="btn bg-slate-600">
                <FaArrowRight />
              </button>
            </div>
            <div className="w-[80%] h-full flex justify-center items-center gap-2">
              <div className="w-[80%] h-full flex flex-col justify-start items-center">
                <div className="avatar">
                  <div className="w-28 rounded">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <h2 className="text-white text-2xl font-bold font-playfair text-center">
                  Pepe
                </h2>
              </div>
              <div className="w-[80%] h-[25%] flex justify-start items-center p-5"></div>
            </div>
          </div>
          <div className="w-full h-[30%] flex">
            <div className="w-[50%] h-full ">
              <div className="badge badge-outline text-white">Ultimo post</div>
              <div className="w-full h-full shadow-xl flex">
                <img
                  className="w-[50%] h-full object-cover rounded-md"
                  src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                />
                <div className=" w-full h-full flex  flex-col justify-around items-center">
                  <h2 className="text-white font-bold font-playfair text-sm">
                    New released!
                  </h2>
                  <p className="text-white text-xs">Click Spotiwhy app.</p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-full ">
              <div className="badge badge-outline text-white">Mis Post</div>
              <div className="w-full h-full -space-x-6 flex ">
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[30%]  flex flex-col justify-center items-center">
            <h3 className="text-white text-lg font-bold font-playfair">
              Agregar una publicacion
            </h3>
            <button className="btn bg-slate-600 w-full">
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="w-[90%] h-auto flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold font-playfair">
            Ultimas publicaciones
          </h3>
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </div>
    </main>
  );
};

export default SectionPost;
