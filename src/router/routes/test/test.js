import { lazy } from "react";
import { PATH } from "./path";

const ttest = [
  {
    exact: true,
    // guard: SwitchGuard,
    path: PATH.HOME,
    component: lazy(() => import("../../../views/Login")),
  },
  {
    exact: true,
    // guard: SwitchGuard,
    path: "/switch",
    component: lazy(() => import("../../../views/Login")),
  },
  {
    exact: true,
    // guard: SwitchGuard,
    path: "/switch",
    component: lazy(() => import("../../../views/Login")),
  },
];

export default ttest;
