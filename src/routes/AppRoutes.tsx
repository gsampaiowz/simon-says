import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FilmsPage from "@/pages/FilmsPage/FilmsPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<FilmsPage/>} path="/" />
        <Route element path="/:idFilme" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
