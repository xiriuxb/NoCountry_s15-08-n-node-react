import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../context/useAuthStore";

const useAuth = () => {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const navigate = useNavigate();
  const logIn = (redirectTo = "/") => {
    localStorage.setItem("user:auth", "true");
    setIsAuth(true);
    navigate(redirectTo);
  };

  const logOut = (redirectTo = "/") => {
    localStorage.removeItem("user:auth");
    setIsAuth(false);
    navigate(redirectTo, { replace: true });
  };

  return { logIn, logOut };
};

export default useAuth;
