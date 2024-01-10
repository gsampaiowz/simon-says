import { useParams } from "react-router-dom";
import "./FilmDetails.css";
import filmsArray from "@/data/films";
import Container from "./../../components/Container/Container";
import MainContent from "@/components/MainContent/MainContent";
import FiltersNav from "@/components/FiltersNav/FiltersNav";
import { IoCloseSharp, IoPlaySharp } from "react-icons/io5";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

const FilmDetails = () => {
  const { idFilme } = useParams();

  const [inVideo, setInVideo] = useState(false);

  const [atualFilter, setAtualFilter] = useState<string | null>("Todos");

  useEffect(() => {
    setAtualFilter(localStorage.getItem("atualFilter"));
  }, []);

  const film =
    atualFilter === "Todos"
      ? filmsArray[parseInt(idFilme ?? "0")]
      : filmsArray.filter((film) => film.Categorias === atualFilter)[
          parseInt(idFilme ?? "0")
        ];

  return (
    <MainContent additionalClass="film-details">
      <Container additionalClass={"filter-and-title"}>
        <FiltersNav
          atualFilter={atualFilter || "Todos"}
          setAtualFilter={setAtualFilter}
          windowWidthParam={Number.POSITIVE_INFINITY}
        />
        <h2 className="film-detail-title">{film?.Título}</h2>
      </Container>
      {inVideo ? (
        <div className="film-player">
          <ReactPlayer url={film?.YouTube} width={640} height={360} controls />
          <IoCloseSharp
            className="film-close-icon"
            size={50}
            onClick={() => setInVideo(false)}
          />
        </div>
      ) : (
        <div
          onClick={() => setInVideo(true)}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${film["Thumb principal"]}`,
          }}
          className="film-thumb-principal"
        >
          <IoPlaySharp color="var(--color-white)" size={80} className="film-play-icon" />
          <Container additionalClass="film-thumb-flex">
            <h1 className="film-thumb-title">{film?.Título}</h1>
          </Container>
        </div>
      )}
      <Container additionalClass="film-details-info">
        {film?.Texto && <p className="film-details-text">{film?.Texto}</p>}
        <div className="film-details-credits">
          <p className="film-details-director">{film?.Diretor}</p>
          <p className="film-details-cliente">{film?.Cliente}</p>
          <p className="film-details-categoria">{film?.Categorias}</p>
        </div>
      </Container>
    </MainContent>
  );
};

export default FilmDetails;
