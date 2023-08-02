import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./context/ContextProvider";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhBYVB2WmFZfV1gfF9HYlZQR2YuP1ZhSXxQdkJgWH9WcXNWQ2haVUQ="
);

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
