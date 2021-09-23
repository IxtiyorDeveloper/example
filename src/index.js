import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      {/* <React.StrictMode> */}
      <Router>
        <App />
      </Router>
      {/* </React.StrictMode> */}
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
