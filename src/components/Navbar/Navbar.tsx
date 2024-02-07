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

  //LÓGICA PARA MUDAR O FILTRO DE FILMES, SCROLL, E SALVAR NO SESSION STORAGE

  const mudarFiltro = (filtro: string) => {
    window.scrollTo(0, 0);
    navbarRef.current?.scrollTo(0, 0);
    setExibeNav(false);
    setAtualFilter(filtro);
    sessionStorage.setItem("atualFilter", filtro);
  };

  //LÓGICA PARA SCROLLAR PARA O TOPO QUANDO CLICAR EM UM LINK
  const linkClick = () => {
    navbarRef.current?.scrollTo(0, 0);
    window.scrollTo(0, 0);
    setExibeNav(false);
  };

  const { language } = useContext(LanguageContext) || {};

  //LÓGICA PARA ESCONDER O NAVBAR QUANDO MUDAR DE IDIOMA
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
      {categoriasNav.map((categoria) => (
        <NavLink
          onClick={() => mudarFiltro(categoria.categoria)}
          to={`/filmes/${categoria.link.replace("motion 2D/3D", "animacao")}`}
          key={categoria.categoria}
        >
          {categoria.categoria}
        </NavLink>
      ))}
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
    </nav>
  );
};

export default Navbar;
