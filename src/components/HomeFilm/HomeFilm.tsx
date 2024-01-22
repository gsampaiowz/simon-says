import "./HomeFilm.css";

type HomeFilmProps = {
  isLarge?: boolean;
  title: string;
  subtitle: string;
  image: string;
  style?: React.CSSProperties;
  onclick?: () => void;
};

const HomeFilm = ({
  isLarge = false,
  title,
  subtitle,
  image,
  style,
  onclick,
}: HomeFilmProps) => {
  return (
    <article
      style={style}
      className={`home-film-article${isLarge ? " large-home-film" : ""}`}
      onClick={onclick}
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
