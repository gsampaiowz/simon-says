import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import "./FiltersNav.css";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FiltersNav = () => {
  const [atualFilter, setAtualFilter] = useState("Todos");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.onresize = handleResize;
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <div
        className={`films-page-filters ${
          isDropdownOpen ? "exibe-films-filters" : ""
        }`}
      >
        <NavLink
          onClick={() => setAtualFilter("Publicidade")}
          className="films-filters-link"
          to={"/publicidade"}
        >
          Publicidade
        </NavLink>
        <NavLink
          onClick={() => setAtualFilter("Social Media")}
          className="films-filters-link"
          to={"/social-media"}
        >
          Social Media
        </NavLink>
        <NavLink
          onClick={() => setAtualFilter("Animação 2D e 3D")}
          className="films-filters-link"
          to={"/animacao"}
        >
          Animação 2D e 3D
        </NavLink>
        <NavLink
          onClick={() => setAtualFilter("Institucional")}
          className="films-filters-link"
          to={"/institucional"}
        >
          Institucional
        </NavLink>
        <NavLink
          onClick={() => setAtualFilter("Clipes de Música")}
          className="films-filters-link"
          to={"/clipes-musica"}
        >
          Clipes de Música
        </NavLink>
      </div>

      {windowWidth <= 1360 && (
        <button
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
            console.log(isDropdownOpen);
          }}
          className="films-filter-dropdown"
        >
          {atualFilter} <FaChevronDown />
        </button>
      )}
    </Container>
  );
};

export default FiltersNav;
