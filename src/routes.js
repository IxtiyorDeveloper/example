import { lazy } from "react";

const main = lazy(() => import("./pages/main/index/index"));


export const routes = [
  {
    path: "/",
    exact: true,
    component: main,
  },
];
