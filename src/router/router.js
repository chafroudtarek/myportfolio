import React, { Suspense, Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import LoadingScreen from "../components/Loading/Loading";
import AuthGuard from "../guards/AuthGuard";
import authRoutes from "./routes/auth/auth";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route?.guard ? route.guard : Fragment;
        const Layout = route.layout ? route.layout : Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>
                  <Component />
                </Layout>
              </Guard>
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
    path: "/home",
    guard: AuthGuard,
    layout: MainLayout,
    component: lazy(() => import("../views/Home")),
    //   // routes: [
    //   //   {

    //   //     exact: true,
    //   //     path: "/home",
    //   //     component: lazy(() => import("../views/Home")),
    //   //   },
    //   //   {
    //   //     exact: true,
    //   //     path: "/magazine",
    //   //     component: lazy(() => import("../views/Home")),
    //   //   },
    //   // ],
  },
];

export default routes;
