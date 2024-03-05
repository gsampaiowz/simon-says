import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./FilmDetails.css";
import Container from "./../../components/Container/Container";
import MainContent from "@/components/MainContent/MainContent";
import FiltersNav from "@/components/FiltersNav/FiltersNav";
import { IoCloseSharp, IoPlaySharp } from "react-icons/io5";
import ReactPlayer from "react-player";
import { useContext, useEffect, useState } from "react";
import FilmItem from "@/components/FilmItem/FilmItem";
import { IoMdArrowDropdown } from "react-icons/io";
import { LanguageContext } from "@/App";
import { filmsArray } from "@/data/films";

const FilmDetails = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

  const { language } = useContext(LanguageContext)!;

  const { idFilme } = useParams();

  const [inVideo, setInVideo] = useState(false);

  const [atualFilter, setAtualFilter] = useState<string>(
    sessionStorage.getItem("atualFilter")?.toString()!
  );

  //ENCONTRA O FILME PELO ID E IDIOMA
  const film = filmsArray
    .find((films) => films.Idioma === localStorage.getItem("idioma"))!
    .Films.find((film) => film.FilmId === idFilme);

  //ENCONTRA OS FILMES DA MESMA CAMPANHA
  const filmsRelacionados = filmsArray
    .find((films) => films.Idioma === localStorage.getItem("idioma"))!
    .Films.filter(
      (f) => f.Título === film?.Título && f.FilmId !== film?.FilmId
    );

  //SCROLLA AO TOPO AO CARREGAR E MANTEM O FILTRO SALVO NO SESSION STORAGE
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FUNÇÃO PARA MUDAR O FILME
  const changeFilm = (id: string) => {
    navigate(`/filmes/${encodeURIComponent(atualFilter as string)}/${id}`);
    setInVideo(true);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [categoriaIndex, setCategoriaIndex] = useState<number>(Number(sessionStorage.getItem("categoriaIndex")));

  //FUNÇÃO PARA MUDAR O FILTRO
  const mudarFiltro = (filtro: string, index: number) => {
    setAtualFilter(filtro);
    sessionStorage.setItem("atualFilter", filtro);
    setIsDropdownOpen(!isDropdownOpen);
    setCategoriaIndex(index);
    sessionStorage.setItem("categoriaIndex", (index).toString());
  };

  //LÓGICA PARA CARREGAR IMAGENS E SCROLLAR AO TOPO QUANDO MUDAR O FILME
  useEffect(() => {
    window.scrollTo(0, 0);

    const img = new Image();
    img.src = film?.["Thumb principal"]!;
    img.onload = () => setIsLoaded(true);
  }, [film?.["Thumb principal"]]);

  const categoriasLinks = [
    {
      categoria: ["Todos", "All", "Todos"],
      link: "todos",
    },
    {
      categoria: ["Publicidade", "Advertising", "Publicidad"],
      link: "publicidade",
    },
    {
      categoria: ["Institucional", "Institutional", "Institucional"],
      link: "institucional",
    },
    {
      categoria: ["Motion 2D/3D", "Motion 2D/3D", "Motion 2D/3D"],
      link: "motion 2D/3D",
    },
    {
      categoria: ["Clipes de Música", "Music Clips", "Clips musicales"],
      link: "clipes de Música",
    },
    {
      categoria: ["Entretenimento", "Entertainment", "Entretenimiento"],
      link: "entretenimento",
    },
  ];

  //LÓGICA PARA MUDAR DE CATEGORIA QUANDO O IDIOMA MUDA, PREVENINDO ERROS
  useEffect(() => {
    setAtualFilter(
      language === "BR"
        ? categoriasLinks[categoriaIndex].categoria[0]
        : language === "EN"
        ? categoriasLinks[categoriaIndex].categoria[1]
        : categoriasLinks[categoriaIndex].categoria[2]
    );
  }, [language]);

  //LÓGICA PARA PREVENIR SCROLL QUANDO O VIDEO ESTÁ ABERTO
  useEffect(() => {
    document.body.style.overflow = inVideo ? "hidden" : "auto";
  }, [inVideo]);

  //FUNÇÃO PARA VERIFICAR SE O NAVEGADOR É SAFARI
  function isSafari(): boolean {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  //SE FOR SAFARI O VIDEO COMEÇA MUTADO DEVIDO AS POLITCAS DO NAVEGADOR
  const [isMuted, setIsMuted] = useState(isSafari());

  return (
    <MainContent additionalClass="film-details">
      <Container additionalClass={"filter-and-title"}>
        <FiltersNav
          map={categoriasLinks.map((c, index) => (
            <NavLink
              key={
                language === "BR"
                  ? c.categoria[0]
                  : language === "EN"
                  ? c.categoria[1]
                  : c.categoria[2]
              }
              onClick={() =>
                mudarFiltro(
                  language === "BR"
                    ? c.categoria[0]
                    : language === "EN"
                    ? c.categoria[1]
                    : c.categoria[2],
                  index
                )
              }
              className="films-filters-link"
              to={`/filmes/${c.link.replace("motion 2D/3D", "animacao")}`}
            >
              {language === "BR"
                ? c.categoria[0]
                : language === "EN"
                ? c.categoria[1]
                : c.categoria[2]}
            </NavLink>
          ))}
          atualFilter={atualFilter || "Todos"}
          windowWidthParam={Number.POSITIVE_INFINITY}
        />
        <h2 className="film-detail-title">{film?.Título}</h2>
      </Container>
      {inVideo ? (
        <>
          <div
            onClick={() => setInVideo(false)}
            className="film-player-background"
          ></div>
          <div className="film-player">
            <ReactPlayer
              url={film?.YouTube}
              className={"film-player-react-player"}
              controls
              width={"100%"}
              height={"100%"}
              muted={isMuted}
              playing
              playsinline
            />
            {isMuted && (
              <small
                onClick={() => setIsMuted(false)}
                className="safari-desmutar"
              >
                Clique para desmutar
              </small>
            )}
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
