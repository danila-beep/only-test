import React from "react";
import "./index.scss";
import { createRoot } from "react-dom/client";
import App from "@app/App";
import { Provider } from "react-redux";
import { store } from "@shared/model/store";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find root element");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
