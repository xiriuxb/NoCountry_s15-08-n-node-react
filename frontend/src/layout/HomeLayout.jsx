import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <header className=" w-full h-[80px] mb-4">
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};

export default HomeLayout;
