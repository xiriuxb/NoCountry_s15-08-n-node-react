import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../context/useAuthStore";

const AuthLayout = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <>
      {isAuth ? (
        <Navigate to={"/"} replace />
      ) : (
        <main className="flex w-full flex-col bg-custom-dark h-screen overflow-hidden font-inter">
          <div className="flex self-center h-screen w-full max-w-screen-2xl max-h-[1080px] overflow-hidden">
            <section className="hidden sm:flex sm:items-center sm:justify-center sm:w-1/2 bg-cover bg-right relative">
              <img
                src="/canadepesca.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute h-full flex flex-col justify-between font-playfair text-white">
                <Link to={"/"}>
                  <h1 className="text-6xl p-6">
                    FishSeason
                  </h1>
                </Link>
                <h3 className="text-4xl justify-left w-2/3 p-6 font-light">
                  Los mejores momentos son los que creas
                </h3>
              </div>
            </section>
            <section className="w-full sm:w-1/2 flex flex-col items-center overflow-y-auto justify-around">
              <Link to={"/"} className="sm:hidden p-5">
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
