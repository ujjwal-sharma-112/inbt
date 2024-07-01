import React, { Fragment, Suspense } from "react";
import { Route, createBrowserRouter, createRoutesFromElements, Navigate } from "react-router-dom";
import PageLoading from "../components/PageLoading";
import CoreLayout from "./CoreLayout";
import routes from "./routes";

const renderRoute = () => {
  return routes.map((route, i) => {
    let { element: Element, path } = route;
    const Layout = route.layout || Fragment;
    return (
      <>
        <Route
          key={i}
          id={i}
          path={path}
          element={
            <Suspense fallback={<PageLoading />}>
              <Layout>
                <Element />
              </Layout>
            </Suspense>
          }
        />
      </>
    );
  });
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<CoreLayout />}>
      {renderRoute()}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Route>
  )
);

export default router;