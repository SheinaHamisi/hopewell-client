import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./features/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "react-toastify/dist/ReactToastify.css";
import "quill/dist/quill.snow.css";
//import "react-phone-number-input/style.css";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
