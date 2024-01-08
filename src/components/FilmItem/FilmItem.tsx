import "./FilmItem.css"
import imagemPadraoMiniatura from "@/assets/img/imagem-padrao-miniatura.png";

type FilmItemProps = {
    title: string;
    subtitle: string;
    image?: string;
}

const FilmItem = ({title, subtitle, image = imagemPadraoMiniatura} : FilmItemProps) => {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="film-item">
            <h1 className="film-item__title">{title}</h1>
            <h2 className="film-item__subtitle">{subtitle}</h2>
        </div>
    );
};

export default FilmItem;