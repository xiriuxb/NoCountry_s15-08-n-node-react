import { Navigate } from "react-router-dom";
import UserSignUp from "../components/userSignUp/UserSignUp";
import UserLogIn from "../components/userSignUp/UserLogIn";

const authRoutes = [
  {
    path: "",
    element: <Navigate to={"register"} replace />,
  },
  {
    path: "register",
    element: <UserSignUp loginPath="/auth/login" />,
  },
  {
    path: "login",
    element: <UserLogIn registerPath="/auth/register" />,
  },
];

export default authRoutes;