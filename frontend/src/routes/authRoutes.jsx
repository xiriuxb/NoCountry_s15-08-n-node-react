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
    element: <UserSignUp />,
  },
  {
    path: "login",
    element: <UserLogIn />,
  },
];

export default authRoutes;
