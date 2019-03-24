import React from 'react';
import { BackHandler } from 'react-native';
import { Route, Switch, withRouter } from "react-router-native";
import AScreen from "./AScreen";
import BScreen from "./BScreen";
import CScreen from "./CScreen";
import goBack, { registerHistory } from "../functions/goBack";

// intercepts the physical back button of the device.
BackHandler.addEventListener('hardwareBackPress', goBack);

export default withRouter(props => {
  registerHistory(props.history);

  return (<Switch>
      <Route exact path="/"  component={AScreen} />
      <Route exact path="/b" component={BScreen} />
      <Route exact path="/c" component={CScreen} />
    </Switch>
  )}
);
