import { RouterProvider } from "react-router-dom";
import appRoutes from "./routes/appRoutes";

export default function App() {
  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
}
