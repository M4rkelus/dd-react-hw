import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import Form from "../../pages/form/form";
import NotFound from "../../pages/not-found/not-found";
import { AppRoute } from "../../const";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={Main} />
        <Route exact path={AppRoute.ARCHIVE} component={Archive} />
        <Route exact path={AppRoute.EVENT} component={Form} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
});

export default App;
