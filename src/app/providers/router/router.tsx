import { createBrowserRouter } from "react-router-dom";

import Layout from "@/app/layouts/layouts";
import Error404Page from "@/pages/error404-page";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        index: true,
        lazy: () => import("@/pages/question-main-page"),
      },
      {
        path: "question/:id",
        lazy: () => import("@/pages/question-detailed-page"),
      },
    ],
  },
]);
