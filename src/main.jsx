import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/scrollToTop";
import App from "./App";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <HelmetProvider>
        <App/>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);