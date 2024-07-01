import { lazy } from "react";

const routes = [
  {
    path: "/",
    element: lazy(() => import("../pages/Home")),
  },
  {
    path: "/404",
    element: lazy(() => import("../pages/NotFound")),
  }
]

export default routes;