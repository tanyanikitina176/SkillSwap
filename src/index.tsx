import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/global.css";
import App from "./app/App.tsx";
import { AppTry } from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <AppTry/>
  </StrictMode>,
);
