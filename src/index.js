import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Student from "./Student";

ReactDOM.render(
  <>
    <App />
    <Student name={"Anuradha"} />
    <Student name={"Radha"} />
    <Student name={"Paswan"} />
    <Student name={"Pandit"} />
    <Student name={"RahulAnuradha"} />
  </>,
  document.getElementById("root")
);
