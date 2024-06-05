import { Link, NavLink } from "react-router-dom";

const navItems = [
  {
    name: "eventos",
    route: "",
  },
  {
    name: "tienda",
    route: "",
  },
  {
    name: "mapa",
    route: "/map",
  },
  {
    name: "iniciar",
    route: "",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="drawer z-30">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full">
            <div className="flex-none lg:hidden">
              <label
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
                    <li>
                      <NavLink
                        className="w-full btn btn-sm btn-outline text-base text-white px-4 uppercase"
                        to={item.route}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
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
            {/* Sidebar content here */}
            {navItems.map((item) => {
              return (
                <li>
                  <Link
                    className="btn btn-md btn-outline text-base text-white mx-3 uppercase"
                    to={item.route}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
