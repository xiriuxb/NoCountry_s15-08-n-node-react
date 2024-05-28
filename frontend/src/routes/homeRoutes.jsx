import HeroPage from "../views/home/HeroPage";
import MapView from "../views/home/MapView";

const homeRoutes = [
  {
    path: "",
    element: <HeroPage />,
  },
  {
    path: "map",
    element: <MapView />,
  },
];

export default homeRoutes;
