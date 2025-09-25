// import { StrictMode } from "react";
// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// ✅ ResizeObserver polyfill for Safari <13.4
import { ResizeObserver as ResizeObserverPolyfill } from "@juggle/resize-observer";

if (typeof window.ResizeObserver === "undefined") {
  window.ResizeObserver = ResizeObserverPolyfill;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
