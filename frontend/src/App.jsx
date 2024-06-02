import HeroPage from "./views/home/HeroPage";
import { Form, RouterProvider } from "react-router-dom";
import appRoutes from "./routes/appRoutes";
import PuntoInteres from "./components/PointOfInterest/PuntoInteres";

export default function App() {
  return (
    <>
      {/* <HeroPage /> */}
      {/* <FormLogin/> */}
      {/* <RouterProvider router={appRoutes} /> */}
      <PuntoInteres/>
    </>
  );
}
