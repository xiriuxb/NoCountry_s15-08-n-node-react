import { FiMessageCircle } from "react-icons/fi";

const CardPost = () => {
  return (
    <div className="bg-black/5 shadow-sm shadow-white w-full h-[250px] rounded-lg p-2">
      <div className="w-full h-full flex ">
        <div className="w-[40%] h-full flex flex-col ">
          <div className="w-full h-full flex flex-col justify-center items-center ">
            <div className="w-full h-full flex p-1">
              <div className="avatar">
                <div className="w-18 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="w-full h-full flex p-1 ">
                <h4 className="text-white m-1 text-sm font-bold font-playfair ">
                  Sara
                </h4>
              </div>
            </div>
            <div className="w-full h-full bg-slate-900 p-1 rounded-lg">
              <p className="text-white m-1">Pesque Dorado Aqui</p>
            </div>
          </div>
          <div className="w-full h-full p-1">
            <div className="w-full h-full  p-1 flex flex-col justify-center items-center">
              <div className="w-full h-auto flex justify-between ">
                <p className="text-white/50 text-[8px] m-1">Mas post de Sara</p>
                <p className="text-white/50 text-[8px] m-1">20 Post</p>
              </div>
              <div className="w-[80%] h-full flex items-center pr-1 ">
                {/* <img
                  className="w-[60%] h-full rounded-md relative right-0 "
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt=""
                />
                <img
                  className="w-[60%] h-full rounded-md relative right-16"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt=""
                />
                <img
                  className="w-[60%] h-full rounded-md relative right-32"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt=""
                />
                <img
                  className="w-[60%] h-full rounded-md relative right-48"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt=""
                /> */}
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-full  p-1">
          <div className="w-full h-full p-1">
            <div className="w-full h-[60%]  ">
              <img
                className="w-full h-full rounded-lg "
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-[30%] p-1">
              <div className="w-full h-[70%] text-sm flex justify-start items-center space-x-2 text-white/50 ">
                <FiMessageCircle />
                <p className="text-white/50 text-sm">Comentarios</p>
              </div>
              <div className="w-full h-[80%] bg-slate-800 flex justify-between items-center p-2 rounded-lg">
                <p className="text-white text-[7px] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, dolore.
                </p>
                <div>
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
