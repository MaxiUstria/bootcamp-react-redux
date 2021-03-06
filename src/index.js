import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Route>
      <App />
    </Route>
  </ReduxProvider>,
  document.getElementById("App")
);
