import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Root from "../../Layouts/Root";
import Appointment from "../../pages/Appointments/Appointment/Appointment";
import ContactUs from "../../pages/Contactus/ContactUs";
import About from "../../pages/Home/About/About";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Reviews from "../../pages/Reviews/Reviews";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import MyAppointment from "../../Dashboard/MyAppointment";
import AllUsers from "../../Dashboard/AllUsers";
import AdminRoute from "../../PrivateRoute/AdminRoute";
import AddDoctors from "../../Dashboard/AddDoctors/AddDoctors";
import ManageDoctors from "../../Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Dashboard/Payment/Payment";
import DisplayError from "../../shared/DisplayError/DisplayError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <DisplayError />,
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
    ],
  },
  {
    path: "/dashboard",
    errorElement: <DisplayError />,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctors",
        element: (
          <AdminRoute>
            <AddDoctors></AddDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: async ({ params }) =>
          fetch(
            `https://doctors-portal-server-beryl-xi.vercel.app/booking/${params.id}`
          ),
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
