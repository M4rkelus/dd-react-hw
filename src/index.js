import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import { events } from "./mocks";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App events={events} />);
