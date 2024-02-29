import MainContent from "@/components/MainContent/MainContent";
import "./DiretoresPage.css";
import Container from "./../../components/Container/Container";
import directors, { bgImagesLoop } from "@/data/directorFilms";
import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "@/App";

const DiretoresPage = () => {
  const navigate = useNavigate();

  const { language } = useContext(LanguageContext)!;

  //FILTRA O IDIOMA
  const diretores = directors.find((d) => d.Idioma === language)!.Diretores;

  //ORGANIZA EM ORDER ALFABETICA
  diretores.sort((a, b) => a.Nome.localeCompare(b.Nome));

  let currentIndex = 1;

  let fundo: HTMLDivElement | null;

  const fundoRef = useRef(null);

// FUNÇÃO PARA MUDAR A IMAGEM DE FUNDO AUTOMATICAMENTE
  function changeBackground() {
    let img = new Image();
    img.onload = function () {
      fundo!.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img.src})`;
    };
    img.src = bgImagesLoop[currentIndex];
    currentIndex++;

    if (currentIndex >= bgImagesLoop.length) {
      currentIndex = 0;
    }
  }

  //EXECUÇÃO DA FUNÇÃO ACIMA
  useEffect(() => {
    fundo = fundoRef.current;

    let img = new Image();
    img.onload = function () {
      fundo!.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img.src})`;
      fundo!.style.opacity = "1";
    };
    img.src = bgImagesLoop[0];
    const timer = setInterval(changeBackground, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [fundo!]);

  //FUNÇÃO PARA MUDAR A IMAGEM DE FUNDO QUANDO O MOUSE PASSA POR CIMA DO NOME DO DIRETOR
  const mudarBg = (img: string) => {
    let image = new Image();
    image.onload = function () {
      fundo!.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image.src})`;
    };
    image.src = img;
  };

  return (
    <MainContent>
      <Container additionalClass={"diretores-container"}>
        <div
          ref={fundoRef}
          id="diretores-fundo"
          className="diretores-fundo"
        ></div>
        <h2 className="diretores-title">{language === "BR" ? "Diretores" : language === "EN" ? "Directors" : "Directores"}</h2>
        <div className="diretores-links">
          {diretores.map((director) => (
            <h2
              onMouseEnter={() => mudarBg(director.Frame)}
              key={director.Nome}
              onClick={() => {
                navigate(
                  `/diretores/${director.Nome}/${director.Films[0].FilmId}`
                );
                sessionStorage.setItem("atualFilter", director.Nome);
              }}
              className="diretor-link"
            >
              {director.Nome}
            </h2>
          ))}
        </div>
      </Container>
    </MainContent>
  );
};

export default DiretoresPage;
