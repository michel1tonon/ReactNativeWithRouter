import React from 'react';
import { NativeRouter } from "react-router-native";
import RouteScreen from './app/screens';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <RouteScreen />
      </NativeRouter>
    );
  }
}