import React, { Suspense } from "react";
import Layout from "./components/layout/Layout";
import { Route, Switch } from "react-router";
import { routes } from "./routes";

const Main = (props) => {
  return (
    <Layout>
      <Suspense fallback={<p>...loading</p>}>
        {routes.map(({ path, exact, accepted, component }, index) => {
          return <Route {...{ path, exact, component }} key={index} />;
        })}
      </Suspense>
    </Layout>
  );
};

export default Main;
