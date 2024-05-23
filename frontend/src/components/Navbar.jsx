const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-4xl">FishSeason</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-7 	">
            <li className="btn btn-sm btn-outline mx-3 py-5">
              <a>EVENTOS</a>
            </li>
            <li className="btn btn-sm btn-outline mx-3 py-5">
              <a>TIENDA</a>
            </li>
            <li className="btn btn-sm btn-outline mx-3 py-5">
              <a>MAPA</a>
            </li>
            <li className="btn btn-sm btn-outline mx-3 py-5">
              <a>INICIAR</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
