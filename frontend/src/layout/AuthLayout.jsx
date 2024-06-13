import { Link, Navigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { useAuthStore } from "../context/useAuth";

const AuthLayout = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <>
      {isAuth ? (
        <Navigate to={"/"} replace />
      ) : (

        <main className="flex w-full bg-black h-screen">
          <div className="flex flex-row w-1/2 relative ml-60">
            <img src="/canadepesca.png" className="w-full" />
            <div className="absolute">
              <Link to={"/"}>
                <h1 className="text-6xl font-playfair text-white p-6 pb-96 mb-12">FishSeason</h1>
              </Link>
              <h3 className="text-4xl font-playfair justify-left text-white w-2/3 pt-96 p-6">Los mejores momentos son los que creas</h3>
            </div>
          </div>
          <section className="w-3/4 flex flex-col items-center overflow-y-auto justify-center">
            <Outlet />
          </section>
        </main>
      )}
    </>
  );
};

export default AuthLayout;
