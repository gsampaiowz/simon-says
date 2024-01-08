import "./Header.css"
import logoHeader from "@/assets/img/logo-header.png"

const Header = () => {
    return (
        <header className="header">
            <img width={300} src={logoHeader} alt="Logotipo Simon Says" />
        </header>
    );
};

export default Header;