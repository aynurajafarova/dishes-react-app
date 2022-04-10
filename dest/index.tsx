import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./client/shared/redux/store";

ReactDOM.render(
  <Provider {...{ store }}>
    <App />
  </Provider>,
  document.getElementById("root")
);
