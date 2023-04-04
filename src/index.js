import React from "react";
import ReactDOM from "react-dom/client";
import  { RTB_Provider } from "./App";
import ThemeProvider from "./lib/themeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RTB_Provider />
  </React.StrictMode>
);
