import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/App";

type NavbarProps = {
  navbarRef: React.RefObject<HTMLElement>;
  exibeNav: boolean;
  setExibeNav: (value: boolean) => void;
};

const Navbar = ({ navbarRef, exibeNav, setExibeNav }: NavbarProps) => {
  const [, setAtualFilter] = useState("");

  const mudarFiltro = (filtro: string) => {
    window.scrollTo(0, 0);
    navbarRef.current?.scrollTo(0, 0);
    setExibeNav(false);
    setAtualFilter(filtro);
    sessionStorage.setItem("atualFilter", filtro || "Todos");
  };

  const linkClick = () => {
    navbarRef.current?.scrollTo(0, 0);
    window.scrollTo(0, 0);
    setExibeNav(false);
  };

  const { changeLanguage, language } = useContext(LanguageContext) || {};

  useEffect(() => {
    setExibeNav(false);
  }, [language]);

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

  const categoriasNav = categoriasLinks.filter(
    (categoria) =>
      categoria.categoria !== "Todos" && categoria.categoria !== "All"
  );

  return (
    <nav
      ref={navbarRef}
      className={`navbar-header ${exibeNav ? "navbar-header-active" : ""}`}
    >
      <NavLink onClick={() => linkClick()} to={"/sobre"}>
        {language === "BR" ? "Sobre" : language === "EN" ? "About" : "Sobre"}
      </NavLink>
      {/* <NavLink
        onClick={() => mudarFiltro("Publicidade")}
        to={"/filmes/publicidade"}
      >
        Publicidade
      </NavLink>
      <NavLink
        onClick={() => mudarFiltro("Motion 2D/3D")}
        to={"/filmes/animacao"}
      >
        Animação 2D e 3D
      </NavLink>
      <NavLink
        onClick={() => mudarFiltro("Entretenimento")}
        to={"/filmes/entretenimento"}
      >
        Entretenimento
      </NavLink>
      <NavLink
        onClick={() => mudarFiltro("Institucional")}
        to={"/filmes/institucional"}
      >
        Institucional
      </NavLink>
      <NavLink
        onClick={() => mudarFiltro("Clipes de Música")}
        to={"/filmes/clipes-musica"}
      >
        Video Clipes
      </NavLink> */}
      {categoriasNav.map((categoria) => (
        <NavLink
          onClick={() => mudarFiltro(categoria.categoria)}
          to={`/filmes/${categoria.link.replace("motion 2D/3D", "animacao")}`}
          key={categoria.categoria}
        >
          {categoria.categoria}
        </NavLink>
      ))}
      {/* <NavLink
        onClick={() => mudarFiltro("Séries/Doc")}
        to={"/filmes/series-documentarios"}
      >
        Séries e Documentários
      </NavLink> */}
      <NavLink onClick={() => linkClick()} to={"/servicos-producao"}>
        {language === "BR"
          ? "Serviços de Produção"
          : language === "EN"
          ? "Production Services"
          : "Servicios de Producción"}
      </NavLink>
      <NavLink onClick={() => linkClick()} to={"/diretores"}>
        {language === "BR"
          ? "Diretores"
          : language === "EN"
          ? "Directors"
          : "Directores"}
      </NavLink>
      <NavLink onClick={() => linkClick()} to={"/contato"}>
        {language === "BR"
          ? "Contato"
          : language === "EN"
          ? "Contact"
          : "Contacto"}
      </NavLink>
      {/* <NavLink onClick={() => linkClick()} to={"/search"}>
        Pesquisar
      </NavLink> */}
      <div className="idiomas">
        <button onClick={() => changeLanguage!("EN")}>Inglês</button>
        <button onClick={() => changeLanguage!("BR")}>Português</button>
        <button onClick={() => changeLanguage!("ESP")}>Espanhol</button>
      </div>
    </nav>
  );
};

export default Navbar;
