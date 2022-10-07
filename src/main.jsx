import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  createBrowserRouter,
  Switch,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello BrowserRouter</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    {/* <App /> */}
  </React.StrictMode>
);

// import About from "./components/views/About";
// import Home from "./components/views/Home";
// import Layout from "./components/views/Layout";

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch></Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
