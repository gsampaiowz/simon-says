import "./FilmsPage.css";
import FilmItem from "@/components/FilmItem/FilmItem";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MainContent from "@/components/MainContent/MainContent";
import Container from "./../../components/Container/Container";
import FiltersNav from "@/components/FiltersNav/FiltersNav";
import { LanguageContext } from "@/App";
import { filmsArrayProps } from "@/data/films";

const FilmsPage =  () => {

  const [filmsLoaded, setFilmsLoaded] = useState<filmsArrayProps>([]);

  useEffect(() => {
    async function fetchData() {
      const {filmsArray} = await import('@/data/films')
        setFilmsLoaded(filmsArray);
    }
    fetchData();
}, []);

  const navigate = useNavigate();

  const { language } = useContext(LanguageContext)!;

  const [linguagemAtual, setLinguagemAtual] = useState(language);

  const [atualFilter, setAtualFilter] = useState<string>("Todos");

  const [filterDescription, setFilterDescription] = useState<string>("");

  //TIPAGEM PARA EVITAR FUTUROS ERROS
  type Film = (typeof filmsLoaded)[0]["Films"][0];

  const films: Film[] = [];

  //SELECIONA OS CLIENTES EXISTENTES SEM REPETIR
  const seenClientes = new Set();
  filmsLoaded
    .find((f) => f.Idioma === language)!
    ["Films"].forEach((film) => {
      if (!seenClientes.has(film.Título)) {
        atualFilter === "Todos" || atualFilter === "All"
          ? films.push(film)
          : atualFilter === film.Categorias && films.push(film);
        seenClientes.add(film.Título);
      }
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //FUNÇÃO PARA MUDAR O FILTRO
  const mudarFiltro = (filtro: string) => {
    (filtro);
    
    setAtualFilter(filtro);
    sessionStorage.setItem("atualFilter", filtro);
    setIsDropdownOpen(!isDropdownOpen);
  };

  //LÓGICA PARA CARREGAR 20 FILMES POR VEZ
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = films.slice(0, indexOfLastItem);

  const verMais = () => {
    setCurrentPage(currentPage + 1);
  };

  //PUXA O PARAMETRO DA CATEGORIA PELA URL
  const { categoria } = useParams();

  //LÓGICA PARA CARREGAR O FILTRO SALVO E O ESTADO DO DROPDOWN NO SESSION STORAGE E REINICIAR OS FILMES QUANDO MUDAR DE CATEGORIA, IDIOMA, ESTADO DO DROPDOWN OU PÁGINA
  // TAMBÉM MUDA O TEXTO DE DESCRIÇÃO DE ACORDO COM A CATEGORIA E IDIOMA
  useEffect(() => {
    setAtualFilter(sessionStorage.getItem("atualFilter")!);
    setIsDropdownOpen(sessionStorage.getItem("isDropdownOpen") === "true");
    setCurrentPage(1);

    switch (categoria) {
      case "publicidade":
        language === "BR"
          ? setFilterDescription(
              "A publicidade é a essência da SimonSays Filmes. Comerciais, videoclipes, institucionais, parcerias com agências e talentos, convergem para criar ideias e oportunidades."
            )
          : language === "EN"
          ? setFilterDescription(
              "Advertising is the essence of SimonSays Filmes. Commercials, music videos, institutional, partnerships with agencies and talent, converge to create ideas and opportunities."
            )
          : setFilterDescription(
              "La publicidad es la esencia de SimonSays Filmes. Comerciales, videos musicales, institucionales, alianzas con agencias y talentos, convergen para crear ideas y oportunidades."
            );
        break;
      case "entretenimento":
        language === "BR"
          ? setFilterDescription(
              "Há mais de 5 anos, temos sido uma força colaborativa como parceiros e co-produtores de renomadas produtoras no Brasil."
            )
          : language === "EN"
          ? setFilterDescription(
              "For over 5 years, we have been a collaborative force as partners and co-producers of renowned producers in Brazil."
            )
          : setFilterDescription(
              "Por más de 5 años, hemos sido una fuerza colaborativa como socios y coproductores de productoras de renombre en Brasil."
            );
        break;
      case "animacao":
        language === "BR"
          ? setFilterDescription(
              "Em cada projeto, transcendemos limites, criando linguagem e ilustrações excepcionais que desafiam expectativas."
            )
          : language === "EN"
          ? setFilterDescription(
              "In each project, we transcend boundaries, creating exceptional language and illustrations that defy expectations."
            )
          : setFilterDescription(
              "En cada proyecto, trascendemos límites, creando un lenguaje e ilustraciones excepcionales que desafían las expectativas."
            );
        break;
      default:
        setFilterDescription("");
        break;
    }
  }, [atualFilter, isDropdownOpen, language, window.document.URL]);

  //LÓGICA PARA CARREGAR MAIS FILMES QUANDO O USUÁRIO CHEGA AO FINAL DA PÁGINA
  window.onscroll = function () {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;

    if (offset >= height - 50) {
      setTimeout(verMais, 250);
    }
  };

  const categoriasLinks = [
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
          : "Publicidad",
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
          ? "Music Clips"
          : "Clips musicales",
      link: "clipes de Música",
    },
    {
      categoria:
        language === "BR"
          ? "Entretenimento"
          : language === "EN"
          ? "Entertainment"
          : "Entretenimiento",
      link: "entretenimento",
    },
  ];

  //LÓGICA PARA MUDAR DE CATEGORIA QUANDO O IDIOMA MUDA, PREVENINDO ERROS
  useEffect(() => {
    if (language === linguagemAtual) {
      return;
    } else {
      navigate(`/filmes/todos`);
      language === "EN"
        ? mudarFiltro("All")
        : language === "ESP"
        ? mudarFiltro("Todos")
        : mudarFiltro("Todos");
        setLinguagemAtual("");
    }

    console.log(films)
  }, [language]);

  return (
    <MainContent additionalClass="films-page">
      <Container additionalClass={"films-page-filter-section"}>
        <FiltersNav additionalClass="films-page-filters"
          map={categoriasLinks.map((c) => (
            <NavLink
              key={c.categoria}
              onClick={() => mudarFiltro(c.categoria)}
              className="films-filters-link"
              to={`/filmes/${c.link.replace("motion 2D/3D", "animacao")}`}
            >
              {c.categoria}
            </NavLink>
          ))}
          atualFilter={atualFilter}
          windowWidthParam={1400}
        />

        {filterDescription && (
          <p className="filter-description">{filterDescription}</p>
        )}
      </Container>
      <div className="films-list">
        {currentItems.map((film) => (
          <FilmItem
            image={film["Thumb miniatura"]}
            onclick={() =>
              navigate(
                `/filmes/${encodeURIComponent(atualFilter.replace("Motion 2D/3D", "Animacao") as string)}/${
                  film.FilmId
                }`
              )
            }
            key={film.FilmId}
            title={film["Título"]}
            subtitle={film["Subtítulo"]}
          />
        ))}
      </div>
    </MainContent>
  );
};

export default FilmsPage;
