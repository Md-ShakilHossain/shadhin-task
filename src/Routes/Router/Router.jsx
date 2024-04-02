import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home1 from "../../Components/Home1";
import Home2 from "../../Components/Home2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/home1",
            element:<Home1></Home1>
          },
          {
            path: "/home2",
            element:<Home2></Home2>
          },

        ],
      },
  ]);

  export default router;