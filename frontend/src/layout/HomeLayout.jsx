import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <header className="text-white w-full h-[80px] absolute">
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};

export default HomeLayout;
