import ReactDOM from "react-dom/client";

import "./index.scss";

import Root from "./Root";

const appRootElement = document.querySelector("#root")!;

const appRoot = ReactDOM.createRoot(appRootElement);

appRoot.render(<Root />);
