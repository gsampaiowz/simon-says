import MainContent from "@/components/MainContent/MainContent";
import "./HomePage.css";
import Container from "./../../components/Container/Container";
import { IoArrowDownSharp } from "react-icons/io5";
import clipe from "@/assets/videos/clipe-homepage.mp4";
import filmsArray from "@/data/films";
import HomeFilm from "@/components/HomeFilm/HomeFilm";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const filmsHome = filmsArray.filter((film) => film.Home);

  const navigate = useNavigate();

  console.log(filmsHome);
  

  return (
    <MainContent>
      <Container additionalClass="home-page-flex">
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
            scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
          color="var(--color-black)"
        />
        <div className="home-page-films">
          <HomeFilm
            style={{ gridArea: "1 / 1" }}
            onclick={() => navigate(`/filme/${filmsHome.at(0)!.FilmId}`)}
            image={filmsHome.at(0)!["Thumb miniatura"]}
            title={filmsHome.at(0)!.Título}
            subtitle={filmsHome.at(0)!.Subtítulo}
          />
          <HomeFilm
            onclick={() => navigate(`/filme/${filmsHome.at(1)!.FilmId}`)}
            style={{ gridArea: "1 / 1", marginTop: "15vw" }}
            image={filmsHome.at(1)!["Thumb miniatura"]}
            title={filmsHome.at(1)!.Título}
            subtitle={filmsHome.at(1)!.Subtítulo}
          />
          {filmsHome.slice(2, 7).map((film) => (
            <HomeFilm
              onclick={() => navigate(`/filme/${film.FilmId}`)}
              isLarge
              key={film.FilmId}
              image={film["Thumb miniatura"]}
              title={film.Título}
              subtitle={film.Subtítulo}
            />
          ))}
          <HomeFilm
            onclick={() => navigate(`/filme/${filmsHome.at(7)!.FilmId}`)}
            image={filmsHome.at(7)!["Thumb miniatura"]}
            title={filmsHome.at(7)!.Título}
            subtitle={filmsHome.at(7)!.Subtítulo}
          />
          <HomeFilm
            onclick={() => navigate(`/filme/${filmsHome.at(8)!.FilmId}`)}
            image={filmsHome.at(8)!["Thumb miniatura"]}
            title={filmsHome.at(8)!.Título}
            subtitle={filmsHome.at(8)!.Subtítulo}
          />
          {filmsHome.slice(9).map((film) => (
            <HomeFilm
              onclick={() => navigate(`/filme/${film.FilmId}`)}
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
