import { NavLink } from "react-router-dom";

const AdminSideNavComponent = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open overflow-y-hidden">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center h-[100vh]">
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-circle btn-primary drawer-button lg:hidden absolute bottom-8 right-8"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="white" d="M3 6h18v2H3v-2z" />
            <path fill="white" d="M3 12h18v2H3v-2z" />
            <path fill="white" d="M3 18h18v2H3v-2z" />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-52 min-h-full bg-base-200 text-base-content">
          {adminNavItems.map((it) => {
            return (
              <li key={it.name}>
                <NavLink to={it.path}>{it.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const adminNavItems = [
  { name: "Home", path: "/" },
  { name: "Users", path: "/admin/users" },
  { name: "Map", path: "/admin/map" },
  { name: "Events", path: "/admin/events" },
];

export default AdminSideNavComponent;
