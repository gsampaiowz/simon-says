import { useNavigate, useParams } from "react-router-dom";
import "./FilmDetails.css";
import filmsArray from "@/data/films";
import Container from "./../../components/Container/Container";
import MainContent from "@/components/MainContent/MainContent";
import FiltersNav from "@/components/FiltersNav/FiltersNav";
import { IoCloseSharp, IoPlaySharp } from "react-icons/io5";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import imagemPadraoMiniatura from "@/assets/img/imagem-padrao-miniatura.png";
// Importando Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FilmDetails = () => {
  const navigate = useNavigate();

  const { idFilme } = useParams();

  const [inVideo, setInVideo] = useState(false);

  const [atualFilter, setAtualFilter] = useState<string | null>("Todos");

  const film = filmsArray.find((film) => film.FilmId === idFilme);

  const filmsRelacionados = filmsArray.filter(
    (f) => f.Cliente === film?.Cliente && f.FilmId !== film?.FilmId
  );

  useEffect(() => {
    setAtualFilter(localStorage.getItem("atualFilter"));
    console.log(filmsRelacionados);
  }, []);

  return (
    <MainContent additionalClass="film-details">
      <Container additionalClass={"filter-and-title"}>
        <FiltersNav
          atualFilter={atualFilter || "Todos"}
          setAtualFilter={setAtualFilter}
          windowWidthParam={Number.POSITIVE_INFINITY}
        />
        <h2 className="film-detail-title">{film?.Título}</h2>
      </Container>
      {inVideo ? (
        <>
          <div className="film-player-background"></div>
          <div className="film-player">
            <ReactPlayer
              url={film?.YouTube}
              className={"film-player-react-player"}
              controls
              width={"100%"}
              height={"100%"}
              playing={true}
            />
            <IoCloseSharp
              className="film-close-icon"
              size={50}
              onClick={() => setInVideo(false)}
            />
          </div>
        </>
      ) : (
        <div
          onClick={() => setInVideo(true)}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${imagemPadraoMiniatura}")`,
          }}
          className="film-thumb-principal"
        >
          <IoPlaySharp
            color="var(--color-white)"
            size={80}
            className="film-play-icon"
          />
          <Container additionalClass="film-thumb-flex">
            <h1 className="film-thumb-title">{film?.Título}</h1>
          </Container>
        </div>
      )}
      {filmsRelacionados.length > 1 && (
        <div className="filmes-relacionados">
          <Swiper
            breakpoints={{
              992: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={0}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {filmsRelacionados.map((filme) => (
              <SwiperSlide key={filme.FilmId}>
                <div onClick={() => navigate(`/trabalho/${filme.FilmId}`)} className="film-relacionado-info">
                  <div
                    style={{
                      backgroundImage: `url("${imagemPadraoMiniatura}"`,
                    }}
                    className="film-relacionado"
                  ></div>
                  <h1>{filme.Título}</h1>
                  <h2>{filme.Subtítulo}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <Container additionalClass="film-details-info">
        {film?.Texto && <p className="film-details-text">{"film?.Texto"}</p>}
        <div className="film-details-credits">
          <p className="film-details-director">{film?.Diretor}</p>
          <p className="film-details-cliente">{film?.Cliente}</p>
          <p className="film-details-categoria">{film?.Categorias}</p>
        </div>
      </Container>
    </MainContent>
  );
};

export default FilmDetails;
