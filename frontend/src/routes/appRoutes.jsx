import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import homeRoutes from "./homeRoutes";
import authRoutes from "./authRoutes";
import MapLayout from "../layout/MapLayout";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: homeRoutes,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: authRoutes,
  },
  {
    path: "/map",
    element: <MapLayout />,
  },
]);

export default appRoutes;