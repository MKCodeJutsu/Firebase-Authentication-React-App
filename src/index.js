import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { HelmetProvider } from "react-helmet-async";

//   LEVEL 2
import { DataProvider } from "./context/Datacontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
