import { RouterProvider } from "react-router-dom";
import appRoutes from "./routes/appRoutes";
import { InfoPeces } from "./components/infoPeces/InfoPeces";

export default function App() {
  return (
    <>
   {/*    <RouterProvider router={appRoutes} /> */}
   <InfoPeces />
    </>
  );
}
