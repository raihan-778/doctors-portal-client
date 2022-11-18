import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Dashboard from "../../Dashboard/Dashboard";
import Root from "../../Layouts/Root";
import Appointment from "../../pages/Appointments/Appointment/Appointment";
import ContactUs from "../../pages/Contactus/ContactUs";
import About from "../../pages/Home/About/About";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Reviews from "../../pages/Reviews/Reviews";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
        ],
      },
    ],
  },
]);

export default router;
