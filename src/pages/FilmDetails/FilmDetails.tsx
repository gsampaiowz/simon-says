import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./FilmDetails.css";
import filmsArray from "@/data/films";
import Container from "./../../components/Container/Container";
import MainContent from "@/components/MainContent/MainContent";
import FiltersNav from "@/components/FiltersNav/FiltersNav";
import { IoCloseSharp, IoPlaySharp } from "react-icons/io5";
import ReactPlayer from "react-player";
import { useContext, useEffect, useRef, useState } from "react";
import FilmItem from "@/components/FilmItem/FilmItem";
import { IoMdArrowDropdown } from "react-icons/io";
import { LanguageContext } from "@/App";
import screenfull from "screenfull";

const FilmDetails = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

  const { language } = useContext(LanguageContext)!;

  const { idFilme } = useParams();

  const [inVideo, setInVideo] = useState(false);

  const [atualFilter, setAtualFilter] = useState<string | null>("Todos");

  const film = filmsArray
    .find((films) => films.Idioma === localStorage.getItem("idioma"))!
    .Films.find((film) => film.FilmId === idFilme);

  const filmsRelacionados = filmsArray
    .find((films) => films.Idioma === localStorage.getItem("idioma"))!
    .Films.filter(
      (f) => f.Título === film?.Título && f.FilmId !== film?.FilmId
    );

  useEffect(() => {
    setAtualFilter(sessionStorage.getItem("atualFilter"));
  }, []);

  const changeFilm = (id: string) => {
    navigate(`/filmes/${encodeURIComponent(atualFilter as string)}/${id}`);
    setInVideo(true);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mudarFiltro = (filtro: string) => {
    setAtualFilter(filtro);
    sessionStorage.setItem("atualFilter", filtro || "Todos");
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const img = new Image();
    img.src = film?.["Thumb principal"]!;
    img.onload = () => setIsLoaded(true);
  }, [film?.["Thumb principal"]]);

  let categoriasLinks = [
    {
      categoria:
        language === "BR" ? "Todos" : language === "EN" ? "All" : "Todos",
      link: "todos",
    },
    {
      categoria:
        language === "BR"
          ? "Publicidade"
          : language === "EN"
          ? "Advertising"
          : "Publicidade",
      link: "publicidade",
    },
    {
      categoria:
        language === "BR"
          ? "Institucional"
          : language === "EN"
          ? "Institutional"
          : "Institucional",
      link: "institucional",
    },
    {
      categoria:
        language === "BR"
          ? "Motion 2D/3D"
          : language === "EN"
          ? "Motion 2D/3D"
          : "Motion 2D/3D",
      link: "motion 2D/3D",
    },
    {
      categoria:
        language === "BR"
          ? "Clipes de Música"
          : language === "EN"
          ? "Music Videos"
          : "Clipes de Música",
      link: "clipes de Música",
    },
    {
      categoria:
        language === "BR"
          ? "Entretenimento"
          : language === "EN"
          ? "Entertainment"
          : "Entretenimento",
      link: "entretenimento",
    },
  ];

  const playerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inVideo && playerRef.current && screenfull.isEnabled) {
      screenfull.request(playerRef.current);
    }
  }, [inVideo]);

  return (
    <MainContent additionalClass="film-details">
      <Container additionalClass={"filter-and-title"}>
        <FiltersNav
          map={categoriasLinks.map((categoria) => (
            <NavLink
              key={categoria.categoria}
              onClick={() => mudarFiltro(categoria.categoria)}
              className="films-filters-link"
              to={`/filmes/${categoria.link.replace(
                "motion 2D/3D",
                "animacao"
              )}`}
            >
              {categoria.categoria}
            </NavLink>
          ))}
          atualFilter={atualFilter || "Todos"}
          windowWidthParam={Number.POSITIVE_INFINITY}
        />
        <h2 className="film-detail-title">{film?.Título}</h2>
      </Container>
      {inVideo ? (
        <>
          <div className="film-player-background"></div>
          <div ref={playerRef} className="film-player">
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
          <IoMdArrowDropdown
            color="var(--color-white)"
            size={45}
            className="film-down-icon"
          />
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
              index % 2 === 0 ? (
                <span key={index}>{text}</span>
              ) : (
                <b key={index}>{text}</b>
              )
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
