import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main>
      {import.meta.env.VITE_APP_IS_LOGGED === 'true' ? (
        <Navigate to={"/"} replace/>
      ) : (
        <>
          <h2>Auth (Login and Register page)</h2>
          <Outlet />
        </>
      )}
    </main>
  );
};

export default AuthLayout;
