import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GamePage from "./pages/Game/gamePage";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<GamePage />, document.getElementById("root"));

serviceWorker.unregister();
