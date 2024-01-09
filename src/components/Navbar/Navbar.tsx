import { NavLink } from "react-router-dom";
import "./Navbar.css";

type NavbarProps = {
  navbarRef: React.RefObject<HTMLElement>;
  exibeNav: boolean;
};

const Navbar = ({ navbarRef, exibeNav }: NavbarProps) => {
  return (
    <nav ref={navbarRef} id="navbar-header"
      className={`navbar-header ${exibeNav ? "navbar-header-active" : ""}`}
    >
        <NavLink className={"link-navbar-header"} to={"/sobre"}>Sobre</NavLink>
        <NavLink className={"link-navbar-header"} to={"/publicidade"}>Publicidade</NavLink>
        <NavLink className={"link-navbar-header"} to={"/animacao"}>Animação 2D e 3D</NavLink>
        <NavLink className={"link-navbar-header"} to={"/institucional"}>Institucional</NavLink>
        <NavLink className={"link-navbar-header"} to={"/video-clipes"}>Video Clipes</NavLink>
        <NavLink className={"link-navbar-header"} to={"/series-documentarios"}>Séries e Documentários</NavLink>
        <NavLink className={"link-navbar-header"} to={"/servicos-producao"}>Serviços de Produção</NavLink>
        <NavLink className={"link-navbar-header"} to={"/diretores"}>Diretores</NavLink>
        <NavLink className={"link-navbar-header"} to={"/contato"}>Contato</NavLink>
        <NavLink className={"link-navbar-header"} to={"/search"}>Pesquisar</NavLink>
    </nav>
  );
};

export default Navbar;
