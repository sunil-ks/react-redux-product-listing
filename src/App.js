import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from './router/index';
import "./App.css";
import store from "./store/store";


export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
