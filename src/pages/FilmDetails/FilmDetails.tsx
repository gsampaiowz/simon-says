import { useNavigate, useParams } from "react-router-dom";
import "./FilmDetails.css";
import filmsArray from "@/data/films";
import Container from "./../../components/Container/Container";
import MainContent from "@/components/MainContent/MainContent";
import FiltersNav from "@/components/FiltersNav/FiltersNav";
import { IoCloseSharp, IoPlaySharp } from "react-icons/io5";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import FilmItem from "@/components/FilmItem/FilmItem";

const FilmDetails = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

  const { idFilme } = useParams();

  const [inVideo, setInVideo] = useState(false);

  const [atualFilter, setAtualFilter] = useState<string | null>("Todos");

  const film = filmsArray.find((film) => film.FilmId === idFilme);

  const filmsRelacionados = filmsArray.filter(
    (f) => f.Título === film?.Título && f.FilmId !== film?.FilmId
  );

  useEffect(() => {
    setAtualFilter(localStorage.getItem("atualFilter"));
  }, []);

  const changeFilm = (id: string) => {
    navigate(`/trabalho/${id}`);
    setInVideo(true);
  };

  useEffect(() => {
    const img = new Image();
    img.src = film?.["Thumb principal"]!;
    img.onload = () => setIsLoaded(true);
  }, [film?.["Thumb principal"]]);

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
        <>
          <div className="film-player-background"></div>
          <div className="film-player">
            <ReactPlayer
              url={film?.YouTube}
              className={"film-player-react-player"}
              controls
              width={"100%"}
              height={"100%"}
              playing={true}
            />
            <IoCloseSharp
              className="film-close-icon"
              size={50}
              onClick={() => setInVideo(false)}
            />
          </div>
        </>
      ) : (
        <div
          onClick={() => setInVideo(true)}
          style={{
            transform: isLoaded ? "scale(1)" : "scale(0.8)",
            opacity: isLoaded ? "1" : "0",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${film?.["Thumb principal"]}")`,
          }}
          className="film-thumb-principal"
        >
          <IoPlaySharp
            color="var(--color-white)"
            size={80}
            className="film-play-icon"
          />
          <Container additionalClass="film-thumb-flex">
            <h1 className="film-thumb-title">{film?.Título}</h1>
          </Container>
        </div>
      )}
      {filmsRelacionados.length > 1 && (
        <div className="filmes-relacionados">
          {filmsRelacionados.map((filme) => (
            <FilmItem
              style={{ padding: 20 }}
              image={filme["Thumb miniatura"]}
              subtitle={filme.Subtítulo}
              key={filme.FilmId}
              onclick={() => changeFilm(filme.FilmId)}
            />
          ))}
        </div>
      )}
      <div
        style={{ justifyContent: film?.Texto ? "space-between" : "center" }}
        className="film-details-info"
      >
        {film?.Texto && (
          <p className="film-details-text">
            {film?.Texto.split("*").map((text, index) =>
              index % 2 === 0 ? <span>{text}</span> : <b>{text}</b>
            )}
          </p>
        )}
        <div className="film-details-credits">
          <p className="film-details-director">{film?.Diretor}</p>
          <p className="film-details-cliente">{film?.Cliente}</p>
          <p className="film-details-categoria">{film?.Categorias}</p>
        </div>
      </div>
    </MainContent>
  );
};

export default FilmDetails;
