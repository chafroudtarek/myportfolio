import React, { Suspense, Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
//import DashboardLayout from "./layouts/DashboardLayout";
import LoadingScreen from "../components/Loading/Loading";
//import GuestGuard from "./components/GuestGuard";
//import SwitchGuard from "./components/SwitchGuard";
import authRoutes from "./routes/auth/auth";

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
  ...authRoutes,
  {
    exact: true,
    // guard: SwitchGuard,
    path: "/switch",
    component: lazy(() => import("../views/Home")),
  },
  {
    path: "/",
    // guard: AuthGuard,
    layout: MainLayout,
    component: lazy(() => import("../views/Home")),
    routes: [
      {
        exact: true,
        path: "/home",
        component: lazy(() => import("../views/Home")),
      },
      {
        exact: true,
        path: "/magazine",
        component: lazy(() => import("../views/Home")),
      },
    ],
  },
];

export default routes;
