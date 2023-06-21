import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { AlbumPage } from "../pages/AlbumPage";

export const AlbumRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AlbumPage />} />
      </Routes>
    </>
  );
};
