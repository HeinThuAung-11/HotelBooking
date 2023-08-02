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
import { Dashboard } from "./pages/dashboard";
import { Rooms } from "./pages/rooms";
import { Users } from "./pages/users";
import { Bookings } from "./pages/bookings";
import { injectStore } from "./settings/our_axios";

const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "rooms",
        element: <Rooms />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
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
