import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RoomPage } from "./pages/room-page";
import { Login } from "./components/login";
import { injectStore } from "./settings/our_axios";
import { Register } from "./components/register";
import { Facilities } from "./components/facilities";
const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/room-display",
    element: <RoomPage />,
  },
  {
    path: "/facilities",
    element: <Facilities />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
injectStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
