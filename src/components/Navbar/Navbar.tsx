import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

type NavbarProps = {
  navbarRef: React.RefObject<HTMLElement>;
  exibeNav: boolean;
  setExibeNav: (value: boolean) => void;
};

const Navbar = ({ navbarRef, exibeNav, setExibeNav }: NavbarProps) => {
  const [, setAtualFilter] = useState("");

  const mudarFiltro = (filtro: string) => {
    setExibeNav(false);
    setAtualFilter(filtro);
    localStorage.setItem("atualFilter", filtro || "Todos");
  };

  return (
    <nav
      ref={navbarRef}
      className={`navbar-header ${exibeNav ? "navbar-header-active" : ""}`}
    >
      <NavLink onClick={() => setExibeNav(false)} to={"/sobre"}>Sobre</NavLink>
      <NavLink onClick={() => mudarFiltro("Publicidade")} to={"/trabalhos/publicidade"}>Publicidade</NavLink>
      <NavLink onClick={() => mudarFiltro("Motion 2d/3d")} to={"/trabalhos/animacao"}>Animação 2D e 3D</NavLink>
      <NavLink onClick={() => mudarFiltro("Institucional")} to={"/trabalhos/institucional"}>Institucional</NavLink>
      <NavLink onClick={() => mudarFiltro("Video Clipes")} to={"/trabalhos/video-clipes"}>Video Clipes</NavLink>
      <NavLink onClick={() => mudarFiltro("Séries/Doc")} to={"/trabalhos/series-documentarios"}>
        Séries e Documentários
      </NavLink>
      <NavLink onClick={() => setExibeNav(false)} to={"/servicos-producao"}>Serviços de Produção</NavLink>
      <NavLink onClick={() => setExibeNav(false)} to={"/diretores"}>Diretores</NavLink>
      <NavLink onClick={() => setExibeNav(false)} to={"/contato"}>Contato</NavLink>
      <NavLink onClick={() => setExibeNav(false)} to={"/search"}>Pesquisar</NavLink>
    </nav>
  );
};

export default Navbar;
