import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MapPage from "../views/map/MapPage";

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
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapLayout;
