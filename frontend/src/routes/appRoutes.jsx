import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import homeRoutes from "./homeRoutes";
import authRoutes from "./authRoutes";
import AdminLayout from "../layout/AdminLayout";
import adminRoutes from "./adminRoutes";

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
    path: "/admin",
    element: <AdminLayout />,
    children: adminRoutes,
  },
]);

export default appRoutes;
