import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </React.StrictMode>
    </BrowserRouter>
  );
}
