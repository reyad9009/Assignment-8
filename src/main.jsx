import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import GadgetsDetail from "./components/GadgetsDetail/GadgetsDetail";
import GadgetCards from "./components/GadgetCards/GadgetCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('../category.json'),
        children: [
          {
            path: '/',
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch('../product.json'),
          },
          {
            path: '/category/:category',
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch('../product.json'),
          },
        ]
      },
      {
        path: 'gadgets/:product_id',
        element: <GadgetsDetail></GadgetsDetail>,
        loader: ()=> fetch('../product.json')

      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
