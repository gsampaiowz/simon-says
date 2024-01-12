import "./FilmItem.css"
import imagemPadraoMiniatura from "@/assets/img/imagem-padrao-miniatura.png";

type FilmItemProps = {
    title: string;
    subtitle: string;
    image?: string;
    onclick?: () => void;
}

const FilmItem = ({ onclick, title, subtitle, image } : FilmItemProps) => {
    return (
        <div onClick={onclick} className="film-item">
            <div className="film-item__image" style={{backgroundImage: `url(${imagemPadraoMiniatura})`}} ></div>
            <h1 className="film-item__title">{title}</h1>
            <h2 className="film-item__subtitle">{subtitle}</h2>
        </div>
    );
};
export default FilmItem;