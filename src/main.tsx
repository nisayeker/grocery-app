import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes } from "react-router-dom";
import SupabaseContext from "./components/layouts/SupabaseContext";
import AppRoutes from "./routes";

import "./main.css";
import MantineWrapper from "./components/layouts/MantineWrapper";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineWrapper>
        <SupabaseContext>
          <AppRoutes />
        </SupabaseContext>
      </MantineWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
