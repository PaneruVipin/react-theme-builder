import React from "react";
import ReactDOM from "react-dom/client";
import BackGround from "./App";
import ThemeProvider from "./lib/themeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BackGround />
    </ThemeProvider>
  </React.StrictMode>
);
