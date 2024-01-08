import "./Films.css"
import FilmItem from "@/components/FilmItem/FilmItem";
import filmsArray from "@/data/films";

const Films = () => {
    return (
        <main className="films-page">
            {filmsArray.map((film, index) => (
                <FilmItem key={index} title={film["Título"]} subtitle={film["Subtítulo"]} />
            ))}
        </main>
    );
};

export default Films;