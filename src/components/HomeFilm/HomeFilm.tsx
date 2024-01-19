import "./HomeFilm.css";

type HomeFilmProps = {
  isLarge?: boolean;
  title: string;
  subtitle: string;
  image: string;
  style?: React.CSSProperties;
};

const HomeFilm = ({
  isLarge = false,
  title,
  subtitle,
  image,
  style,
}: HomeFilmProps) => {
  return (
    <article
      style={style}
      className={`home-film-article${isLarge ? " large-home-film" : ""}`}
    >
      <img src={image} />
      <div className="home-film-text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </article>
  );
};

export default HomeFilm;
