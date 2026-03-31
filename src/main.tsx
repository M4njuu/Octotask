import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ButtonPlus from "./test/buttonPlus";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ButtonPlus />
  </React.StrictMode>,
);
