import React, { Suspense, Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
//import DashboardLayout from "./layouts/DashboardLayout";
import LoadingScreen from "../components/Loading";
//import AuthGuard from "./components/AuthGuard";
//import GuestGuard from "./components/GuestGuard";
//import SwitchGuard from "./components/SwitchGuard";
import ttest from "./routes/test/test";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      {routes.map((route, i) => {
        const Layout = route.layout ? route.layout : Fragment;
        const Component = route.component;
        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          >
            {route.routes?.length > 0 &&
              route.routes.map((subRoute, j) => {
                const Component = subRoute.component;
                return (
                  <Route path={subRoute.path} element={<Component />} key={j} />
                );
              })}
          </Route>
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: true,
    layout: MainLayout,
    //  guard: GuestGuard,
    path: "/login",
    component: lazy(() => import("../views/Home")),
  },
  {
    exact: true,
    // guard: SwitchGuard,
    path: "/switch",
    component: lazy(() => import("../views/Home")),
  },
  {
    path: "/",
    // guard: AuthGuard,
    // layout: DashboardLayout,
    component: lazy(() => import("../views/Home")),
    routes: [
      {
        exact: true,
        path: "/",
        component: lazy(() => import("../views/Home")),
      },
      {
        exact: true,
        path: "/magazine",
        component: lazy(() => import("../views/Home")),
      },
      {
        path: "*",
        component: lazy(() => import("../views/Home")),
      },
    ],
  },
  ...ttest,
];

export default routes;
