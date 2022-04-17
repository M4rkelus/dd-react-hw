import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/app";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
