import MainContent from "@/components/MainContent/MainContent";
import "./DiretoresPage.css";
import Container from "./../../components/Container/Container";
import directors, { bgImagesLoop } from "@/data/directorFilms";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const DiretoresPage = () => {
  const navigate = useNavigate();

  directors.sort((a, b) => a.Nome.localeCompare(b.Nome));

  let currentIndex = 1;

  let fundo: HTMLDivElement | null;

  const fundoRef = useRef(null);

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
        <h2 className="diretores-title">Diretores</h2>
        <div className="diretores-links">
          {directors.map((director) => (
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
