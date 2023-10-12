import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard"
const router = createBrowserRouter([
  {
    path: "/",
    element:<Login/>,
  },
  {
    path: "/dashboard",
    element:<Dashboard/>,
  }
]);
export default function App() {
  
  return <>
  <RouterProvider router={router} />
  </>
}
