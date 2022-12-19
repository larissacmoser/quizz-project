import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QuizzProvider } from "./context/quiz";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QuizzProvider>
      <App />
    </QuizzProvider>
  </React.StrictMode>
);
