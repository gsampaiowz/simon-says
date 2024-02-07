import MainContent from "@/components/MainContent/MainContent";
import "./HomePage.css";
import Container from "./../../components/Container/Container";
import { IoArrowDownSharp } from "react-icons/io5";
import clipe from "@/assets/videos/clipe-homepage.mp4";
import filmsArray from "@/data/films";
import HomeFilm from "@/components/HomeFilm/HomeFilm";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LanguageContext } from "@/App";

const HomePage = () => {
  const { changeLanguage, language } = useContext(LanguageContext) || {};

  let filmsHome = filmsArray
    .find((films) => films.Idioma === language)!
    .Films.filter((film) => film.Home);

  useEffect(() => {
    window.scrollTo(0, 0);
    sessionStorage.setItem("atualFilter", "Todos");
  }, []);

  const navigate = useNavigate();

  return (
    <MainContent>
      <Container additionalClass="home-page-flex">
      <div className="idiomas">
        <button onClick={() => changeLanguage!("EN")}>
          {language === "BR"
            ? "Inglês"
            : language === "EN"
            ? "English"
            : "Inglés"}
        </button>
        <button onClick={() => changeLanguage!("BR")}>
          {language === "BR"
            ? "Português"
            : language === "EN"
            ? "Portuguese"
            : "Portugués"}
        </button>
        <button onClick={() => changeLanguage!("ESP")}>
          {language === "BR"
            ? "Espanhol"
            : language === "EN"
            ? "Spanish"
            : "Español"}
        </button>
      </div>
        <IoArrowDownSharp
          className="home-down-arrow-icon"
          size={60}
          onClick={() => {
            window.scrollTo(0, 100);
          }}
          color="var(--color-black)"
        />
        <video
          className="home-page-video-loop"
          autoPlay
          loop
          muted
          src={clipe}
        />
        <IoArrowDownSharp
          className="home-down-arrow-icon"
          size={60}
          onClick={() => {
            window.scrollTo(0, window.innerHeight);
          }}
          color="var(--color-black)"
        />
        <div className="home-page-films">
          <HomeFilm
            style={{ gridArea: "1 / 1" }}
            onclick={() =>
              navigate(
                `/filmes/${sessionStorage.getItem("atualFilter")}/${
                  filmsHome.at(0)!.FilmId
                }`
              )
            }
            image={filmsHome.at(0)!["Thumb miniatura"]}
            title={filmsHome.at(0)!.Título}
            subtitle={filmsHome.at(0)!.Subtítulo}
          />
          <HomeFilm
            onclick={() =>
              navigate(
                `/filmes/${sessionStorage.getItem("atualFilter")}/${
                  filmsHome.at(1)!.FilmId
                }`
              )
            }
            style={{ gridArea: "1 / 1", marginTop: "15vw" }}
            image={filmsHome.at(1)!["Thumb miniatura"]}
            title={filmsHome.at(1)!.Título}
            subtitle={filmsHome.at(1)!.Subtítulo}
          />
          {filmsHome.slice(2, 7).map((film: (typeof filmsHome)[0]) => (
            <HomeFilm
              onclick={() =>
                navigate(
                  `/filmes/${sessionStorage.getItem("atualFilter")}/${
                    film.FilmId
                  }`
                )
              }
              isLarge
              key={film.FilmId}
              image={film["Thumb miniatura"]}
              title={film.Título}
              subtitle={film.Subtítulo}
            />
          ))}
          <HomeFilm
            onclick={() =>
              navigate(
                `/filmes/${sessionStorage.getItem("atualFilter")}/${
                  filmsHome.at(7)!.FilmId
                }`
              )
            }
            image={filmsHome.at(7)!["Thumb miniatura"]}
            title={filmsHome.at(7)!.Título}
            subtitle={filmsHome.at(7)!.Subtítulo}
          />
          <HomeFilm
            onclick={() =>
              navigate(
                `/filmes/${sessionStorage.getItem("atualFilter")}/${
                  filmsHome.at(8)!.FilmId
                }`
              )
            }
            image={filmsHome.at(8)!["Thumb miniatura"]}
            title={filmsHome.at(8)!.Título}
            subtitle={filmsHome.at(8)!.Subtítulo}
          />
          {filmsHome.slice(9).map((film) => (
            <HomeFilm
              onclick={() =>
                navigate(
                  `/filmes/${sessionStorage.getItem("atualFilter")}/${
                    film.FilmId
                  }`
                )
              }
              isLarge
              key={film.FilmId}
              image={film["Thumb miniatura"]}
              title={film.Título}
              subtitle={film.Subtítulo}
            />
          ))}
        </div>
      </Container>
    </MainContent>
  );
};

export default HomePage;
