import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./DiretorPage.css";
import directors from "@/data/directorFilms";
import Container from "./../../components/Container/Container";
import MainContent from "@/components/MainContent/MainContent";
import FiltersNav from "@/components/FiltersNav/FiltersNav";
import { IoCloseSharp, IoPlaySharp } from "react-icons/io5";
import ReactPlayer from "react-player";
import { useContext, useEffect, useState } from "react";
import FilmItem from "@/components/FilmItem/FilmItem";
import { IoMdArrowDropdown } from "react-icons/io";
import { LanguageContext } from "@/App";

const DiretorPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

  const { nome, idFilme } = useParams();

  const { language } = useContext(LanguageContext)!;

  const [inVideo, setInVideo] = useState(false);

  const [atualFilter, setAtualFilter] = useState<string | null>("Todos");

  const diretores = directors.find((d) => d.Idioma === language)!.Diretores;

  const director = diretores.find(
    (d) => d.Nome === nome
  );

  const filmsRelacionados = director!.Films.filter((f) => f.FilmId !== idFilme);

  const film = director?.Films.find((f) => f.FilmId === idFilme);

  const changeFilm = (id: string) => {
    navigate(`/diretores/${nome}/${id}`);
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
    img.src = film?.["Thumb Principal"]!;
    img.onload = () => setIsLoaded(true);
  }, [film?.["Thumb Principal"]]);

  useEffect(() => {
    if (sessionStorage.getItem("atualFilter")) {
      setAtualFilter(sessionStorage.getItem("atualFilter"));
    }
  }, []);

  return (
    <MainContent additionalClass="film-details">
      <Container additionalClass={"filter-and-title"}>
        <h2 className="film-detail-title">Diretores</h2>
        <FiltersNav
          additionalClass="director-filters"
          map={diretores.map((director) => (
            <NavLink
              key={director.Nome}
              onClick={() => mudarFiltro(director.Nome)}
              className="films-filters-link"
              to={`/diretores/${director.Nome}/${director.Films[0].FilmId}`}
            >
              {director.Nome}
            </NavLink>
          ))}
          atualFilter={atualFilter || "Todos"}
          setAtualFilter={setAtualFilter}
          windowWidthParam={Number.POSITIVE_INFINITY}
        />
      </Container>
      {inVideo ? (
        <>
          <div className="film-player-background"></div>
          <div className="film-player">
            <ReactPlayer
              url={film?.Youtube}
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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${film?.["Thumb Principal"]}")`,
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
      {filmsRelacionados!.length > 0 && (
        <div className="filmes-relacionados">
          {filmsRelacionados!.map((filme) => (
            <FilmItem
              style={{ padding: 20 }}
              image={filme["Thumb Miniatura"]}
              title={filme.Título}
              key={filme.FilmId}
              onclick={() => changeFilm(filme.FilmId)}
            />
          ))}
        </div>
      )}
      <div
        style={{
          justifyContent: director?.Biografia ? "space-between" : "center",
        }}
        className="film-details-info"
      >
        {director?.Biografia && (
          <p className="film-details-text">
            {director.Biografia.split("*").map((text, index) =>
              index % 2 === 0 ? (
                <span key={index}>{text}</span>
              ) : (
                <b key={index}>{text}</b>
              )
            )}
          </p>
        )}
      </div>
      {director?.Premios && (
        <div className="diretor-premios">
          <h2>Prêmios</h2>
          <div className="lista-premios">
            {director.Premios.map((premio) => (
              <p key={premio}>{premio}</p>
            ))}
          </div>
        </div>
      )}
    </MainContent>
  );
};

export default DiretorPage;
