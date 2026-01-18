import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Home/Home.jsx";
import AddWork from "./Upload/AddWork/AddWork.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      {
        path: "ADDWORK",
        element: <AddWork />,
      },
    ],
  },
]);

export default router;
