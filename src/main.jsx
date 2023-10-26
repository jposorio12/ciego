import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import tagManager from "react-gtm-module";

const tagManagers = {
  gtmId: `${import.meta.env.VITE_GTM_ID}`,
};

tagManager.initialize(tagManagers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
