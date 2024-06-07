import { Link, Navigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const AuthLayout = () => {
  return (
    <>
      {import.meta.env.VITE_APP_IS_LOGGED === "true" ? (
        <Navigate to={"/"} replace />
      ) : (
        <main className="w-ful h-screen flex flex-col overflow-hidden bg-slate-900">
          <div className="flex self-center h-screen w-full max-w-screen-2xl max-h-[1080px] overflow-hidden">
            <section className="hidden sm:flex sm:items-center sm:justify-center sm:w-1/2 bg-fondo bg-cover bg-right relative">
              <div className="w-[80%] h-[80%] absolute blur-lg bg-fondo bg-cover bg-right rounded-xl"></div>
              <div className="w-[80%] h-[80%] absolute border border-solid border-slate-900 rounded-xl"></div>
              <div className="text-white absolute w-[80%] h-[80%] p-4  ">
                <div className=" flex justify-center">
                  <Link to={"/"}>
                    <h1 className="font-playfair text-white text-7xl drop-shadow-md">
                      FishSeason
                    </h1>
                  </Link>
                </div>
                <div className="absolute top-40 p-4 w-[90%] h-[90%] ">
                  <div className="flex flex-col pt-6  gap-24 w-full h-full">
                  <motion.div
                      variants={fadeIn("left", 0.6)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
                      className="flex justify-start items-center w-full "
                    >
                    <h2 className="font-poetsan font-bold  text-white text-5xl drop-shadow-md ">
                      Explora,
                    </h2>
                    </motion.div>
                    <motion.div
                      variants={fadeIn("left", 0.8)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
                      className="flex justify-center items-center w-full "
                    >
                      <h2 className="font-poetsan font-bold  text-white text-5xl drop-shadow-md ">
                        Pesca,
                      </h2>
                    </motion.div>
                    <motion.div
                      variants={fadeIn("left", 1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
                      className="flex justify-end items-center w-full "
                    >
                      <h2 className="font-poetsan font-bold  text-white text-5xl drop-shadow-md">
                        Disfruta.
                      </h2>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full sm:w-1/2 flex flex-col items-center overflow-y-auto justify-center">
              <Link to={"/"} className="sm:hidden pb-10">
                <h1 className="font-playfair text-white text-5xl drop-shadow-md">
                  FishSeason
                </h1>
              </Link>
              <Outlet />
            </section>
          </div>
        </main>
      )}
    </>
  );
};

export default AuthLayout;
