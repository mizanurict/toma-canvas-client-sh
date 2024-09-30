/** @format */

import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddCraft from "../pages/Cards/AddCraft";
import PrivateRoute from "./PrivateRoute";
import MyArtCraft from "../pages/Cards/MyArtCraft";
import UpdateCraft from "../pages/Cards/UpdateCraft";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AllCraft from "../pages/AllCraft/AllCraft";
import CraftDetails from "../pages/AllCraft/CraftDetails";
import AllDetails from "../pages/AllCraft/AllDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://toma-canvas-server.vercel.app/allCraftData"),
      },
      {
        path: "/all",
        element: <AllCraft></AllCraft>,
        loader: () => fetch("https://toma-canvas-server.vercel.app/allCraft"),
      },
      {
        path: "/allCraft/:id",
        element: (
          <PrivateRoute>
            <AllDetails></AllDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/allCraftData/:id",
        element: (
          <PrivateRoute>
            <CraftDetails></CraftDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/myArtCraft",
        element: (
          <PrivateRoute>
            <MyArtCraft></MyArtCraft>
          </PrivateRoute>
        ),
        loader: () => fetch("https://toma-canvas-server.vercel.app/addCraft"),
      },
      
      
      {
        path: "/updateCraft/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft></UpdateCraft>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://toma-canvas-server.vercel.app/allCraft/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
