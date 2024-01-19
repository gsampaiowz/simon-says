import MainContent from "@/components/MainContent/MainContent";
import "./HomePage.css";
import Container from "./../../components/Container/Container";
import { IoArrowDownSharp } from "react-icons/io5";
import clipe from "@/assets/videos/clipe-homepage.mp4";
import filmsArray from "@/data/films";
import HomeFilm from "@/components/HomeFilm/HomeFilm";

const HomePage = () => {
  const filmsHome = filmsArray.filter((film) => film.Home);

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
          color="var(--color-black)"
        />
        <div className="home-page-films">
          <HomeFilm
            style={{ gridArea: "1 / 1" }}
            image={filmsHome.at(0)!["Thumb miniatura"]}
            title={filmsHome.at(0)!.Título}
            subtitle={filmsHome.at(0)!.Subtítulo}
          />
          <HomeFilm
            style={{ gridArea: "1 / 1" , marginTop: 250 }}
            image={filmsHome.at(1)!["Thumb miniatura"]}
            title={filmsHome.at(1)!.Título}
            subtitle={filmsHome.at(1)!.Subtítulo}
          />
          <HomeFilm
            isLarge
            image={filmsHome.at(2)!["Thumb miniatura"]}
            title={filmsHome.at(2)!.Título}
            subtitle={filmsHome.at(2)!.Subtítulo}
          />
          <HomeFilm
            isLarge
            image={filmsHome.at(3)!["Thumb miniatura"]}
            title={filmsHome.at(3)!.Título}
            subtitle={filmsHome.at(3)!.Subtítulo}
          />
          <HomeFilm
            isLarge
            image={filmsHome.at(4)!["Thumb miniatura"]}
            title={filmsHome.at(4)!.Título}
            subtitle={filmsHome.at(4)!.Subtítulo}
          />
          <HomeFilm
            isLarge
            image={filmsHome.at(5)!["Thumb miniatura"]}
            title={filmsHome.at(5)!.Título}
            subtitle={filmsHome.at(5)!.Subtítulo}
          />
          <HomeFilm
            isLarge
            image={filmsHome.at(6)!["Thumb miniatura"]}
            title={filmsHome.at(6)!.Título}
            subtitle={filmsHome.at(6)!.Subtítulo}
          />
          <HomeFilm
            image={filmsHome.at(7)!["Thumb miniatura"]}
            title={filmsHome.at(7)!.Título}
            subtitle={filmsHome.at(7)!.Subtítulo}
          />
          <HomeFilm
            image={filmsHome.at(8)!["Thumb miniatura"]}
            title={filmsHome.at(8)!.Título}
            subtitle={filmsHome.at(8)!.Subtítulo}
          />
          <HomeFilm
            isLarge
            image={filmsHome.at(9)!["Thumb miniatura"]}
            title={filmsHome.at(9)!.Título}
            subtitle={filmsHome.at(9)!.Subtítulo}
          />
          <HomeFilm
            isLarge
            image={filmsHome.at(10)!["Thumb miniatura"]}
            title={filmsHome.at(10)!.Título}
            subtitle={filmsHome.at(10)!.Subtítulo}
          />
          <HomeFilm
            isLarge
            image={filmsHome.at(11)!["Thumb miniatura"]}
            title={filmsHome.at(11)!.Título}
            subtitle={filmsHome.at(11)!.Subtítulo}
          />
          <HomeFilm
            isLarge
            image={filmsHome.at(12)!["Thumb miniatura"]}
            title={filmsHome.at(12)!.Título}
            subtitle={filmsHome.at(12)!.Subtítulo}
          />
          <HomeFilm
            isLarge
            image={filmsHome.at(13)!["Thumb miniatura"]}
            title={filmsHome.at(13)!.Título}
            subtitle={filmsHome.at(13)!.Subtítulo}
          />
        </div>
      </Container>
    </MainContent>
  );
};

export default HomePage;
