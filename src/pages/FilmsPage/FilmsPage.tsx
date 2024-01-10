import "./FilmsPage.css";
import FilmItem from "@/components/FilmItem/FilmItem";
import filmsArray from "@/data/films";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MainContent from "@/components/MainContent/MainContent";
import FiltersNav from "@/components/FiltersNav/FiltersNav";
import Container from "./../../components/Container/Container";

const FilmsPage = () => {
  const navigate = useNavigate();

  const [atualFilter, setAtualFilter] = useState<string | null>("Todos");

  useEffect(() => {
    setAtualFilter(localStorage.getItem("atualFilter"));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems =
    atualFilter === "Todos"
      ? filmsArray.slice(0, indexOfLastItem)
      : filmsArray
          .filter((film) => film.Categorias === atualFilter)
          .slice(0, indexOfLastItem);

  const verMais = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <MainContent additionalClass="films-page">
      <Container additionalClass={"films-page-filter-section"}>
        <FiltersNav
          atualFilter={atualFilter || "Todos"}
          setAtualFilter={setAtualFilter}
          windowWidthParam={1360}
        />
        <p className="filter-description">
          Advertising is where it all began for Radical. We are one of the most
          iconic, prolific and celebrated producers of commercials in the world.
          Commercials, music videos, agencies, emerging and established
          directorial talent – they all lead to brilliant ideas and
          opportunities, unexpected collaborations and trusted relationships
          that we believe are once again becoming an economic imperative.
        </p>
      </Container>
      <div className="films-list">
        {atualFilter === "Todos"
          ? currentItems.map((film, index) => (
              <FilmItem
                image={film["Thumb miniatura"]}
                onclick={() => navigate(`/trabalho/${index}`)}
                key={index}
                title={film["Título"]}
                subtitle={film["Subtítulo"]}
              />
            ))
          : currentItems
              .filter((film) => film.Categorias === atualFilter)
              .map((film, index) => (
                <FilmItem
                  image={film["Thumb miniatura"]}
                  onclick={() => navigate(`/trabalho/${index}`)}
                  key={index}
                  title={film["Título"]}
                  subtitle={film["Subtítulo"]}
                />
              ))}
      </div>
      <button className="films-list-ver-mais" onClick={verMais}>
        Ver mais
      </button>
    </MainContent>
  );
};

export default FilmsPage;