import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import App from "../App";
import ContactUsPage from "../Pages/ContactUsPage";
import MyMeal from "../Pages/MyMeal";
import HealthTips from "../Pages/HealthTips";
import MonthlyCostPage from "../Pages/MonthlyCostPage";
import MenuPage from "../Pages/MenuPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/contact_us",
        element: <ContactUsPage />,
      },
      {
        path: "/my_meal",
        element: <MyMeal />,
      },
      {
        path: "/health_tips",
        element: <HealthTips />,
      },
      {
        path: "/monthly_cost",
        element: <MonthlyCostPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
    ],
  },
]);
