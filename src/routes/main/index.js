import React, { Suspense, lazy } from "react";
import Loading from "../../containers/Loading";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../../containers/Home"));
const Form = lazy(() => import("../../containers/Formio"));


const App = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/form" component={Form} />
    </Switch>
  </Suspense>
);

export default App;
