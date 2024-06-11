import EventsAdminView from "../views/admin/EventsAdminView";
import MapAdminView from "../views/admin/MapAdminView";
import UsersAdminView from "../views/admin/UsersAdminView";

const adminRoutes = [
  { path: "users", element: <UsersAdminView /> },
  { path: "events", element: <EventsAdminView /> },
  { path: "map", element: <MapAdminView /> },
];

export default adminRoutes;
