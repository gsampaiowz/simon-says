import "./FiltersNav.css";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type FiltersNavProps = {
  windowWidthParam: number;
  atualFilter: string;
  setAtualFilter: (value: string) => void;
  map: JSX.Element[];
};

const FiltersNav = ({
  windowWidthParam,
  atualFilter,
  setAtualFilter,
  map,
}: FiltersNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mudarFiltro = (filtro: string) => {
    setAtualFilter(filtro);
    localStorage.setItem("atualFilter", filtro || "Todos");
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.onresize = handleResize;
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setAtualFilter(localStorage.getItem("atualFilter") || "Todos");
    setIsDropdownOpen(localStorage.getItem("isDropdownOpen") === "true");
  }, [localStorage.getItem("atualFilter"), localStorage.getItem("isDropdownOpen")]);

  return (
    <>
      <div
        className={`films-page-filters ${
          isDropdownOpen ? "exibe-films-filters" : ""
        }`}
      >
        {map}
        {/* <NavLink
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
          onClick={() => mudarFiltro("Motion 2d/3d")}
          className="films-filters-link"
          to={"/trabalhos/animacao"}
        >
          Animação 2D e 3D
        </NavLink>
        <NavLink
          onClick={() => mudarFiltro("Entretenimento")}
          className="films-filters-link"
          to={"/trabalhos/entretenimento"}
        >
          Entretenimento
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
          Video Clipes
        </NavLink> */}
      </div>

      {windowWidth <= windowWidthParam && (
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
