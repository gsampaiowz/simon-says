import "./FilmsPage.css";
import FilmItem from "@/components/FilmItem/FilmItem";
import filmsArray from "@/data/films";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MainContent from "@/components/MainContent/MainContent";
import FiltersNav from "@/components/FiltersNav/FiltersNav";

const FilmsPage = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
 
  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = filmsArray.slice(0, indexOfLastItem);
 
  const verMais = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <MainContent additionalClass="films-page">
      <FiltersNav/>
      <div className="films-list">
        {currentItems.map((film, index) => (
          <FilmItem
            onclick={() => navigate(`/${index}`)}
            key={index}
            title={film["Título"]}
            subtitle={film["Subtítulo"]}
          />
        ))}
      </div>
      <button className="films-list-ver-mais" onClick={verMais}>Ver mais</button>
    </MainContent>
  );
};

export default FilmsPage;
