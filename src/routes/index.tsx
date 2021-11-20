import Game from "../views/Game";
import Home from "../views/Home";
import { appRoutes } from "./routeConstants/appRoutes";
import { RouteProps } from "react-router-dom";

export const routes: RouteProps[] = [
  {
    path: appRoutes.HOME,
    element: <Home />,
  },
  {
    path: appRoutes.GAME,
    element: <Game />,
  },
];
