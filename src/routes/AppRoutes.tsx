import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FilmsPage from "@/pages/FilmsPage/FilmsPage";
import FilmDetails from "@/pages/FilmDetails/FilmDetails";
import HomePage from "@/pages/HomePage/HomePage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import ServicosProducaoPage from "@/pages/ServicosProducaoPage/ServicosProducaoPage";
import DiretoresPage from "@/pages/DiretoresPage/DiretoresPage";
import ContatoPage from "@/pages/ContatoPage/ContatoPage";
import SearchPage from "@/pages/SearchPage/SearchPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<FilmsPage/>} path="/trabalhos/" />
        <Route element={<FilmsPage/>} path="/trabalhos/:categoria" />
        <Route element={<FilmDetails/>} path="/trabalho/:idFilme" />
        <Route element={<HomePage/>} path="/" />
        <Route element={<AboutPage/> } path="/sobre"/>
        <Route element={<ServicosProducaoPage/>} path="/servicos-producao"/>
        <Route element={<DiretoresPage/>} path="/diretores"/>
        <Route element={<ContatoPage/>} path="/contato"/>
        <Route element={<SearchPage/>} path="/search"/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
