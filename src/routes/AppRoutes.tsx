import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Films from "@/pages/Films/Films";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Films/>} path="/" />
        <Route element path="/:idFilme" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
