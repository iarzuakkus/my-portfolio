// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tokens.css";
import "./styles/reset.css";
import "./styles/global.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/pages.css";
import "./styles/about.css";
import "./styles/experience.css";
import "./styles/projects.css";
import "./components/projects/design-showcase/design-showcase.css";
import "./styles/capabilities.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
