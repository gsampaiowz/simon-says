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

  //PUXA OS PARAMETROS DA URL
  const { nome, idFilme } = useParams();

  const { language } = useContext(LanguageContext)!;

  const [inVideo, setInVideo] = useState(false);

  const [atualFilter, setAtualFilter] = useState<string | null>("Todos");

  //FILTRA O IDIOMA
  const diretores = directors.find((d) => d.Idioma === language)!.Diretores;

  //ENCONTRA O DIRETOR PELO NOME
  const director = diretores.find((d) => d.Nome === nome);

  //ENCONTRA OS FILMES RELACIONADOS AO DIRETOR
  const filmsRelacionados = director!.Films.filter((f) => f.FilmId !== idFilme);

  //ENCONTRA O FILME PRINCIPAL PELO ID
  const film = director?.Films.find((f) => f.FilmId === idFilme);

  //FUNÇÃO PARA MUDAR O FILME
  const changeFilm = (id: string) => {
    navigate(`/diretores/${nome}/${id}`);
    setInVideo(true);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //FUNÇÃO PARA MUDAR O FILTRO
  const mudarFiltro = (filtro: string) => {
    setAtualFilter(filtro);
    sessionStorage.setItem("atualFilter", filtro || "Todos");
    setIsDropdownOpen(!isDropdownOpen);
  };

  //LÓGICA PARA CARREGAR IMAGENS E SCROLLAR AO TOPO QUANDO MUDAR O FILME
  useEffect(() => {
    window.scrollTo(0, 0);

    const img = new Image();
    img.src = film?.["Thumb Principal"]!;
    img.onload = () => setIsLoaded(true);
  }, [film?.["Thumb Principal"]]);

  //LÓGICA PARA MANTER O FILTRO ATUALIZADO
  useEffect(() => {
    if (sessionStorage.getItem("atualFilter")) {
      setAtualFilter(sessionStorage.getItem("atualFilter"));
    }
  }, []);

  //LÓGICA PARA PREVENIR SCROLL QUANDO O VIDEO ESTÁ ABERTO
  useEffect(() => {
    document.body.style.overflow = inVideo ? "hidden" : "auto";
  }, [inVideo]);

  //FUNÇÃO PARA IDENTIFICAR SE O NAVEGADOR É SAFARI
  function isSafari(): boolean {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  //SE FOR SAFARI O VIDEO COMEÇA MUTADO DEVIDO AS POLITCAS DO NAVEGADOR
  const [isMuted, setIsMuted] = useState(isSafari());

  return (
    <MainContent additionalClass="film-details diretor-page">
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
          windowWidthParam={Number.POSITIVE_INFINITY}
        />
      </Container>
      {inVideo ? (
        <>
          <div
            onClick={() => setInVideo(false)}
            className="film-player-background"
          ></div>
          <div className="film-player">
            <ReactPlayer
              url={film?.Youtube}
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
