import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from "../auth";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../Heroes";
import { HeroesRoutes } from "../Heroes/routes/HeroesRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesRoutes />,
    children: [
      {
        index: true, //Siempre que se redireccione hacia "/" se redireccionará a "/marvel"
        element: <Navigate to="/marvel" />,
      },
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DcPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "hero/:id",
        element: <HeroPage />,
      },
      {
        path: "/*", //Siempre que se redireccione hacia cualquier otra ruta se redireccionará a "/marvel"
        element: <Navigate to="/marvel" />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
