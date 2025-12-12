// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// global styles
import "./index.css";
import "./styles/colors.css";
import "./styles/buttons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
