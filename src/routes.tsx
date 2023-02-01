import { Route, Routes } from "react-router-dom";
import AuthWrapper from "./components/auth/AuthWrapper";
import AppLayout from "./components/layouts/AppLayout";
import LoginPage from "./components/login/login.page";
import SearchPage from "./components/search/search.page";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="" element={<AuthWrapper />}>
          <Route path="" element={<AppLayout />}>
            <Route path="" index element={<SearchPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
