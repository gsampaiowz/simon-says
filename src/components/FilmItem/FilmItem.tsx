import "./FilmItem.css"
import imagemPadraoMiniatura from "@/assets/img/imagem-padrao-miniatura.png";

type FilmItemProps = {
    title: string;
    subtitle: string;
    image?: string;
    onclick?: () => void;
}

const FilmItem = ({ onclick, title, subtitle, image = imagemPadraoMiniatura } : FilmItemProps) => {
    return (
        <div onClick={onclick} style={{backgroundImage: `url(${image})`}} className="film-item">
            <h1 className="film-item__title">{title}</h1>
            <h2 className="film-item__subtitle">{subtitle}</h2>
        </div>
    );
};
export default FilmItem;