import React, { Component } from "react";
import { Provider } from "mobx-react";
import stores from "./app/src/mobx";
import AppMain from "./app/App";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <Provider {...stores}>
        <AppMain />
      </Provider>
      <Toast position="bottom" bottomOffset={20} />
    </>
  );
}
