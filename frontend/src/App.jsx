
import FormLogin from "./components/FormLogin/FormLogin";
import HeroPage from "./views/home/HeroPage";

import { RouterProvider } from "react-router-dom";
import appRoutes from "./routes/appRoutes";

export default function App() {
  return (
    <>
      {/* <HeroPage /> */}
      <FormLogin/>
      <RouterProvider router={appRoutes} />
    </>
  );
}
