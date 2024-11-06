import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContexts from "./context/AppContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AppContexts>
        <App />
    </AppContexts>
);
