import { Navigate } from "react-router-dom";
import UserSignUp from "../components/userSignUp/UserSignUp";

const authRoutes = [
  {
    path: "",
    element: <Navigate to={"register"} replace />,
  },
  {
    path: "register",
    element: <UserSignUp />,
  },
];

export default authRoutes;