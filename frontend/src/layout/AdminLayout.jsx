import { Navigate, Outlet } from "react-router-dom";
import AdminSideNavComponent from "../components/adminDashboard/AdminSideNavComponent";
import { useAuthStore } from "../context/useAuth";

const AdminLayout = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <>
      {isAuth && import.meta.env.VITE_USER_ROLE == "admin" ? (
        <main>
          <AdminSideNavComponent>
            <Outlet />
          </AdminSideNavComponent>
        </main>
      ) : (
        <Navigate to={"/"} replace />
      )}
    </>
  );
};

export default AdminLayout;
