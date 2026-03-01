import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

import { LanguageProvider } from "./i18n/LanguageContext"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider> 
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

// --- Parallax background scroll effect ---
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const bg = document.getElementById("parallax-bg");

  if (bg) {
    bg.style.backgroundPositionY = `${scrolled * 0.15}px`;
  }
});