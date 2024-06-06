import { Link, Navigate, Outlet } from "react-router-dom";

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
              <div className="absolute">
                <Link to={"/"}>
                  <h1 className="font-playfair text-white text-5xl drop-shadow-md">
                    FishSeason
                  </h1>
                </Link>
                <Link to={"/"}>Inicio</Link>
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
