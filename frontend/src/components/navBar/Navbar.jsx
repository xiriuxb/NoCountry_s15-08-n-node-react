import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../context/useAuthStore";
import useAuth from "../../hooks/useAuth";

const navItems = [
  {
    name: "eventos",
    route: "/events",
  },
  {
    name: "mapa",
    route: "/map",
  },
];

const Navbar = () => {
  const handleClickBtn = () => {
    document.getElementById("drawer-btn").click();
  };

  return (
    <>
      <div className="drawer z-30 font-inter">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full">
            <div className="flex-none lg:hidden">
              <label
                id="drawer-btn"
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <Link to={"/"} className="btn btn-ghost font-playfair text-4xl">
                FishSeason
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal px-7 gap-x-3">
                {navItems.map((item) => {
                  return (
                    <li key={item.route}>
                      <NavLink
                        className="w-full btn btn-sm btn-ghost text-base text-white px-4 uppercase"
                        style={({ isActive }) => {
                          return {
                            textDecoration: isActive ? "underline" : "",
                            textUnderlineOffset: isActive ? "3px" : "",
                          };
                        }}
                        to={item.route}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
                {<li>
                    <AuthButtonComponent />
                  </li>}
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#06071B] gap-3 ">
            <li>
              <Link
                onClick={handleClickBtn}
                className="text-2xl text-white font-playfair"
                to={"/"}
              >
                FishSeason
              </Link>
            </li>
            {/* Sidebar content here */}
            {navItems.map((item) => {
              return (
                <li key={item.route}>
                  <NavLink
                    className="btn btn-md btn-ghost text-base text-white mx-3 uppercase"
                    to={item.route}
                    style={({ isActive }) => {
                      return {
                        textDecoration: isActive ? "underline" : "",
                        textUnderlineOffset: isActive ? "3px" : "",
                      };
                    }}
                    onClick={handleClickBtn}
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <AuthButtonComponent />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;

const AuthButtonComponent = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const handleLoginLogout = () => {
    if (isAuth) {
      logOut("/");
      return;
    }
    navigate("/auth");
  };
  return (
    <button
      className="w-full btn btn-sm btn-ghost text-base text-white px-4 uppercase"
      onClick={handleLoginLogout}
    >
      {isAuth ? "logout" : "registrarse"}
    </button>
  );
};
