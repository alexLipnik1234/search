import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalDataProvider } from "./contexts/globalDataContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalDataProvider>
      <App />
    </GlobalDataProvider>
  </React.StrictMode>
);
