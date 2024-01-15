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

  type Film = (typeof filmsArray)[0];

  const films: Film[] = [];

  const seenClientes = new Set();
  filmsArray.forEach((film) => {
    if (!seenClientes.has(film.Cliente)) {
      films.push(film);
      seenClientes.add(film.Cliente);
    }
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems =
    atualFilter === "Todos"
      ? films.slice(0, indexOfLastItem)
      : films
          .filter((film) => film.Categorias === atualFilter)
          .slice(0, indexOfLastItem);

  const verMais = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setAtualFilter(localStorage.getItem("atualFilter"));
  }, []);

  return (
    <MainContent additionalClass="films-page">
      <Container additionalClass={"films-page-filter-section"}>
        <FiltersNav
          atualFilter={atualFilter || "Todos"}
          setAtualFilter={setAtualFilter}
          windowWidthParam={1800}
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
        {currentItems.map((film) => (
          <FilmItem
            image={film["Thumb miniatura"]}
            onclick={() => navigate(`/trabalho/${film.FilmId}`)}
            key={film.FilmId}
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
