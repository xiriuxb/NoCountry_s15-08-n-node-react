import { Navigate, Outlet } from "react-router-dom";
import AdminSideNavComponent from "../components/adminDashboard/AdminSideNavComponent";

const AdminLayout = () => {
  return (
    <>
      {import.meta.env.VITE_APP_IS_LOGGED == "true" &&
      import.meta.env.VITE_USER_ROLE == "admin" ? (
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
