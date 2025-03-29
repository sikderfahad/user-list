import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Root from "../layout/Root";
import Users from "../pages/users/Users";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import UpdateUser from "../pages/updateUser/UpdateUser";
import axios from "axios";

export const BASE_URL = "https://reqres.in";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
      },
      {
        path: "update-user/:id",
        element: (
          <PrivateRoute>
            <UpdateUser />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await axios.get(`${BASE_URL}/api/users/${params?.id}`),
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
    ],
  },
]);
