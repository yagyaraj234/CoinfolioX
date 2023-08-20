import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TokenProvider } from "./components/Context/Token";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TokenProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TokenProvider>
  </StrictMode>
);
