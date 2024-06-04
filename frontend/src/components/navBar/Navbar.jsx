import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost font-playfair text-4xl">FishSeason</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-7 	">
            <li className="btn btn-sm btn-outline font-playfair text-xl text-white  mx-3 py-5">
              <a>EVENTOS</a>
            </li>
            <li className="btn btn-sm btn-outline font-playfair text-xl text-white mx-3 py-5">
              <a>TIENDA</a>
            </li>
            <li className="btn btn-sm btn-outline font-playfair text-xl text-white mx-3 py-5">
              <Link to="/map">MAPA</Link>
            </li>
            <li className="btn btn-sm btn-outline font-playfair text-xl text-white mx-3 py-5">
              <a>INICIAR</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
