import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "antd/dist/antd.css";
import "@ant-design/pro-components/dist/components.css";
import "react-quill/dist/quill.snow.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
