import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "@/app/providers/router/router";
import { RouterProvider } from "react-router";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./providers/store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);