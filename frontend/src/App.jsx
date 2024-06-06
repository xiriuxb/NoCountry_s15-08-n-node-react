import HeroPage from "./views/home/HeroPage";
import { Form, RouterProvider } from "react-router-dom";
import appRoutes from "./routes/appRoutes";
import MapPage from "./views/map/MapPage";

export default function App() {
  return (
    <>
      {/* <HeroPage /> */}
      {/* <FormLogin/> */}
      {/* <RouterProvider router={appRoutes} /> */}
      <MapPage/>
    </>
  );
}
