// The starting point of the application
// This is where the root component of the application - App - is rendered to the DOM.
// You can add new components to the /client/src/components folder and new test files to the /client/src/tests folder.
import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
