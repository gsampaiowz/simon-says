import "./FiltersNav.css";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type FiltersNavProps = {
  windowWidthParam: number;
  atualFilter: string;
  setAtualFilter: (value: string) => void;
  map: JSX.Element[];
  additionalClass?: string;
};

const FiltersNav = ({
  windowWidthParam,
  atualFilter,
  setAtualFilter,
  map,
  additionalClass,
}: FiltersNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //LÓGICA PAA CAPTAR A LARGUA DA TELA A TODO INSTANTE
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.onresize = handleResize;
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //LÓGICA PARA SALVAR O ESTADO DO FILTRO ATUAL E DO DROPDOWN

  useEffect(() => {
    setAtualFilter(sessionStorage.getItem("atualFilter")!);
    setIsDropdownOpen(sessionStorage.getItem("isDropdownOpen") === "true");
  }, [
    sessionStorage.getItem("atualFilter"),
    sessionStorage.getItem("isDropdownOpen"),
  ]);

  return (
    <>
      {windowWidth <= windowWidthParam ? (
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="films-filter-dropdown"
        >
          <div
            className={`films-page-filters ${
              isDropdownOpen ? "exibe-films-filters " : ""
            }${additionalClass}`}
          >
            {map}
          </div>
          <span className="films-filter-drop-text">{atualFilter}</span>
          <FaChevronDown />
        </button>
      ) : (
        <div
          className={`films-page-filters ${
            isDropdownOpen ? "exibe-films-filters " : ""
          }${additionalClass}`}
        >
          {map}
        </div>
      )}
    </>
  );
};

export default FiltersNav;
