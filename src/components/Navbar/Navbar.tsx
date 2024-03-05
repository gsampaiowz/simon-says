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

  const [categoriaIndex, setCategoriaIndex] = useState<number>(0);

  //FUNÇÃO PARA MUDAR O FILTRO
  const mudarFiltro = (filtro: string, index: number) => {
    setAtualFilter(filtro);
    sessionStorage.setItem("atualFilter", filtro);
    setCategoriaIndex(index);
    sessionStorage.setItem("categoriaIndex", (index + 1).toString());
    linkClick();
  };

  //LÓGICA PARA SCROLLAR PARA O TOPO QUANDO CLICAR EM UM LINK
  const linkClick = () => {
    navbarRef.current?.scrollTo(0, 0);
    window.scrollTo(0, 0);
    setExibeNav(false);
  };
  const { language } = useContext(LanguageContext) || {};

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

  //CATERGORIA SELECIONADAS PARA A NAVBAR

  const categoriasNav = categoriasLinks.slice(1);

  return (
    <nav
      ref={navbarRef}
      className={`navbar-header ${exibeNav ? "navbar-header-active" : ""}`}
    >
      <NavLink onClick={() => linkClick()} to={"/sobre"}>
        {language === "BR" ? "Sobre" : language === "EN" ? "About" : "Sobre"}
      </NavLink>
      {categoriasNav.map((c, index) => (
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
          to={`/filmes/${c.link.replace("motion 2D/3D", "animacao")}`}
        >
          {language === "BR"
            ? c.categoria[0]
            : language === "EN"
            ? c.categoria[1]
            : c.categoria[2]}
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
