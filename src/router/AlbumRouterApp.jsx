import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AlbumRoutes } from "../album/routes/AlbumRoutes";
import { LoginPage } from "../auth/pages/LoginPage";

export const AlbumRouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<AlbumRoutes />} />
      </Routes>
    </Router>
  );
};

