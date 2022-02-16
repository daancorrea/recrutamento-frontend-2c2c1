import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });
registerApplication({
  name: "@dc/react-home",
  app: () => System.import("@dc/react-home"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@dc/navbar",
//   app: () => System.import("@dc/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
