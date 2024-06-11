import HeroPage from "../views/home/HeroPage";
import EventsPage from "../views/home/events/EventsPage";
import MapPage from "../views/map/MapPage";
/* import MapPage from "../views/map/MapPage"; */

const homeRoutes = [
  {
    path: "",
    element: <HeroPage />,
  },
  {
    path: "/map",
    element: <MapPage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
];

export default homeRoutes;
