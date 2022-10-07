import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Root from "./routes/root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root>
        <App />
      </Root>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// export default Routes;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello BrowserRouter</div>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//     <Route exact path="/" component={App} />
//     <Route exact path="/about" component={About} />
//     {/* <App /> */}
//   </React.StrictMode>
// );
