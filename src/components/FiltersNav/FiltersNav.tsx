import { LanguageContext } from "@/App";
import "./FiltersNav.css";
import { useCallback, useContext, useEffect, useState } from "react";
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.onresize = handleResize;
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setAtualFilter(sessionStorage.getItem("atualFilter") || "Todos");
    setIsDropdownOpen(sessionStorage.getItem("isDropdownOpen") === "true");
  }, [
    sessionStorage.getItem("atualFilter"),
    sessionStorage.getItem("isDropdownOpen"),
  ]);

  const { language } = useContext(LanguageContext) || {};

  const [, setLinks] = useState([
    {
      categoria:
        language === "BR" ? "Todos" : language === "EN" ? "All" : "Todos",
      link: "",
    },
    {
      categoria:
        language === "BR"
          ? "Publicidade"
          : language === "EN"
          ? "Advertising"
          : "Publicidade",
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
          ? "Music Videos"
          : "Clipes de Música",
      link: "clipes de Música",
    },
    {
      categoria:
        language === "BR"
          ? "Entretenimento"
          : language === "EN"
          ? "Entertainment"
          : "Entretenimento",
      link: "entretenimento",
    },
  ]);

  useEffect(() => {
    setLinks([
      {
        categoria:
          language === "BR" ? "Todos" : language === "EN" ? "All" : "Todos",
        link: "",
      },
      {
        categoria:
          language === "BR"
            ? "Publicidade"
            : language === "EN"
            ? "Advertising"
            : "Publicidade",
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
            : "Clipes de música",
        link: "clipes de Música",
      },
      {
        categoria:
          language === "BR"
            ? "Entretenimento"
            : language === "EN"
            ? "Entertainment"
            : "Entretenimento",
        link: "entretenimento",
      },
    ]);

    // language === "EN" ? setAtualFilter("All") : setAtualFilter("Todos");
    // atualFilter = language === "EN" ? "All" : "Todos";
    // console.log(atualFilter);

    
  }, [language]);

  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);
  
  useEffect(() => {
   forceUpdate();
  }, [language]);
  

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
