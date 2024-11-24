import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Pelaporan } from "./routes/pelaporan";
import { Profile } from "./routes/profile";
import { Settings } from "./routes/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pelaporan />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
