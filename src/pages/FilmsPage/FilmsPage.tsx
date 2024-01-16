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

  const [filterDescription, setFilterDescription] = useState<string>("");

  type Film = (typeof filmsArray)[0];

  const films: Film[] = [];

  const seenClientes = new Set();
  filmsArray.forEach((film) => {
    if (!seenClientes.has(film.Título)) {
      atualFilter === "Todos"
        ? films.push(film)
        : atualFilter === film.Categorias && films.push(film);
      seenClientes.add(film.Título);
    }
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = films.slice(0, indexOfLastItem);

  const verMais = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setAtualFilter(localStorage.getItem("atualFilter"));
    setCurrentPage(1);

    switch (atualFilter) {
      case "Publicidade":
        setFilterDescription(
          "A publicidade é a essência da SimonSays Filmes. Comerciais, videoclipes, institucionais, parcerias com agências e talentos, convergem para criar ideias e oportunidades."
        );
        break;
      case "Entretenimento":
        setFilterDescription(
          "Produzindo entretenimento há mais de 5 anos, somos sido uma força colaborativa como parceiros e co-produtores de renomadas produtoras no Brasil."
        );
        break;
      case "Motion 2d/3d":
        setFilterDescription(
          "Em cada projeto, transcendemos limites, criando linguagem e ilustrações excepcionais que desafiam expectativas."
        );
        break;
      default:
        setFilterDescription("Sem frase");
        break;
    }
  }, [atualFilter]);

  return (
    <MainContent additionalClass="films-page">
      <Container additionalClass={"films-page-filter-section"}>
        <FiltersNav
          atualFilter={atualFilter || "Todos"}
          setAtualFilter={setAtualFilter}
          windowWidthParam={1400}
        />
        <p className="filter-description">{filterDescription}</p>
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
      {currentItems.length === films.length ? null : (
        <button className="films-list-ver-mais" onClick={verMais}>
          Ver mais
        </button>
      )}
    </MainContent>
  );
};

export default FilmsPage;
