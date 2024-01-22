import React, { useEffect, useState } from "react";
import "./FilmItem.css";
import { useInView } from "react-intersection-observer";

type FilmItemProps = {
  title?: string;
  subtitle?: string;
  image?: string;
  style?: React.CSSProperties;
  onclick?: () => void;
};

const FilmItem = ({
  onclick,
  title,
  subtitle,
  style,
  image,
}: FilmItemProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image!;
    img.onload = () => setIsLoaded(true);
  }, [image]);

  const [viewRef, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={viewRef}
      onClick={onclick}
      style={{
        transform: isLoaded && inView ? "scale(1)" : "scale(0.8)",
        opacity: isLoaded && inView ? "1" : "0",
        ...style,
      }}
      className="film-item"
    >
      <div
        className="film-item__image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <h1 className="film-item__title">{title}</h1>
      <h2 className="film-item__subtitle">{subtitle}</h2>
    </div>
  );
};
export default FilmItem;
