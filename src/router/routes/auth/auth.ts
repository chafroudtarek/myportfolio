import { lazy } from "react";
import { PATH } from "./path";

const authRoutes = [
  {
    exact: true,
    path: PATH.LOGIN,
    component: lazy(() => import("../../../views/auth/Login")),
  },
  {
    exact: true,
    path: PATH.SIGNUP,
    component: lazy(() => import("../../../views/auth/Register")),
  },
  {
    exact: true,
    path: PATH.FORGETPWD,
    component: lazy(() => import("../../../views/auth/ForgetPassword")),
  },
  {
    exact: true,
    path: PATH.RESETPWD,
    component: lazy(() => import("../../../views/auth/ResetPassword")),
  },
  {
    path: "*",
    component: lazy(() => import("../../../views/auth/Login")),
  },
  
];

export default authRoutes;
