import { NavLink } from "react-router-dom";
import "./FiltersNav.css";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type FiltersNavProps = {
  windowWidthParam: number;
  atualFilter: string;
  setAtualFilter: (value: string) => void;
};

const FiltersNav = ({
  windowWidthParam,
  atualFilter,
  setAtualFilter,
}: FiltersNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.onresize = handleResize;
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setAtualFilter(localStorage.getItem("atualFilter") || "Todos");
  }, [localStorage.getItem("atualFilter")]);

  const mudarFiltro = (filtro: string) => {
    setAtualFilter(filtro);
    localStorage.setItem("atualFilter", filtro || "Todos");
    setIsDropdownOpen(!isDropdownOpen)
  };

  return (
    <>
      <div
        className={`films-page-filters ${
          isDropdownOpen ? "exibe-films-filters" : ""
        }`}
      >
        <NavLink
          onClick={() => mudarFiltro("Todos")}
          className="films-filters-link"
          to={"/trabalhos/todos"}
        >
          Todos
        </NavLink>
        <NavLink
          onClick={() => mudarFiltro("Publicidade")}
          className="films-filters-link"
          to={"/trabalhos/publicidade"}
        >
          Publicidade
        </NavLink>
        <NavLink
          onClick={() => mudarFiltro("Social Media")}
          className="films-filters-link"
          to={"/trabalhos/social-media"}
        >
          Social Media
        </NavLink>
        <NavLink
          onClick={() => mudarFiltro("Motion 2d/3d")}
          className="films-filters-link"
          to={"/trabalhos/animacao"}
        >
          Animação 2D e 3D
        </NavLink>
        <NavLink
          onClick={() => mudarFiltro("Institucional")}
          className="films-filters-link"
          to={"/trabalhos/institucional"}
        >
          Institucional
        </NavLink>
        <NavLink
          onClick={() => mudarFiltro("Clipes de Música")}
          className="films-filters-link"
          to={"/trabalhos/clipes-musica"}
        >
          Clipes de Música
        </NavLink>
      </div>

      {windowWidth <= windowWidthParam && (
        <button
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
            console.log(isDropdownOpen);
          }}
          className="films-filter-dropdown"
        >
          <span className="films-filter-drop-text">{atualFilter}</span>{" "}
          <FaChevronDown />
        </button>
      )}
    </>
  );
};

export default FiltersNav;
