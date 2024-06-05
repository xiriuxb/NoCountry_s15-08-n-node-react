import CardPost from "./CardPost";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const SectionPost = () => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[500px] min-h-screen flex flex-col items-center bg-black p-2 gap-2">
        <div className="w-[90%] h-[400px]  flex flex-col  ">
          <div className="w-full h-[30%] flex  ">
            <div className="w-[80%] h-full flex justify-center items-center gap-2 ">
              <h3 className="text-white text-3xl font-bold font-playfair">
                Rio de la Plata
              </h3>
            </div>
            <div className="w-[30%] h-full  flex justify-center items-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src="https://img.a.transfermarkt.technology/portrait/big/28003-1710080339.jpg?lm=1" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[40%] flex justify-center items-center">
            <div className="w-[80%] h-full rounded-lg">
              <img className="w-full h-full object-cover rounded-lg" src="https://billiken.lat/wp-content/uploads/2022/01/rio-de-la-plata-20-1024x768.jpeg" alt="Rio de la Plata" />
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
