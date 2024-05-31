import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MapPage from "../views/map/MapPage";
import SectionPost from "../components/sectionPost/SectionPost";

const MapLayout = () => {
  return (
    <>
      <div className="bg-[#06071B]  min-h-screen flex flex-col justify-between">
        <div className="drawer drawer-end">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-primary"
          >
            Open drawer
          </label>
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <header className="text-white w-full h-[80px] absolute">
              <Navbar />
            </header>
            <MapPage />
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-[510px] bg-black min-h-full text-base-content">
              {/* Sidebar content here */}
              <SectionPost />
            
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapLayout;
