import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    console.log("Error:", err);
    // console.log("Info", info);
    // console.log("Props:", props);
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
