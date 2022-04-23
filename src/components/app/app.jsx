import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import Form from "../../pages/form/form";
import NotFound from "../../pages/not-found/not-found";
import { AppRoute } from "../../const";

const App = ({ events }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={AppRoute.MAIN}
          component={() => <Main events={events} />}
        />
        <Route
          exact
          path={AppRoute.ARCHIVE}
          component={() => <Archive events={events} />}
        />
        <Route
          exact
          path={AppRoute.EVENT}
          component={() => <Form events={events} />}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
