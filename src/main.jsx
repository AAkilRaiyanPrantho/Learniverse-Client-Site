import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import ErrorPage from "./components/Shared/ErrorPage/ErrorPage";
import AllAssignments from "./components/AllAssignments/AllAssignments";
import Root from "./Root/Root";
import MyAssignments from "./components/MyAssignments/MyAssignments";
import SubmittedAssignments from "./components/SubmittedAssignments/SubmittedAssignments";
import CreateAssignments from "./components/CreateAssignments/CreateAssignments";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import AssignmentDetails from "./components/AssignmentDetails/AssignmentDetails";
import AuthProvider from "./components/AuthProviders/AuthProvider";
import React from "react";
import PrivateRoute from "./routes/PrivateRoute";
import UpdateAssignments from "./components/UpdateAssignments/UpdateAssignments";
import SingleAssignmentChecking from "./components/SingleAssignment/SingleAssignmentChecking";


const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allAssignments",
        element: <AllAssignments></AllAssignments>,
        loader: () => fetch('https://programming-hero-assignment-11-server.vercel.app/assignments')
      },
      {
        path: "/myAssignments",
        element:<PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
      },
      {
        path: "/submittedAssignments",
        element:<PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute>,
        loader: () => fetch('https://programming-hero-assignment-11-server.vercel.app/submissions')
      },
      {
        path: "/SingleAssignmentChecking/:id",
        element:<PrivateRoute><SingleAssignmentChecking></SingleAssignmentChecking></PrivateRoute>,
        loader: ({params}) => fetch(`https://programming-hero-assignment-11-server.vercel.app/submissions/${params.id}`)
      },
      {
        path: "/createAssignments",
        element:<PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>,
      },
      {
        path: "/updateAssignments/:id",
        element:<PrivateRoute><UpdateAssignments></UpdateAssignments></PrivateRoute>,
        loader: ({params}) => fetch(`https://programming-hero-assignment-11-server.vercel.app/assignments/${params.id}`)
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/details/:id",
        element:<PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
        loader: () => fetch('https://programming-hero-assignment-11-server.vercel.app/assignments')
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
