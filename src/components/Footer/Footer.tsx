import "./Footer.css";
import logoFooter from "@/assets/img/logo-footer.png";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa"; // Import the necessary package
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  //LÓGICA PARA MUDAR A COR DO FOOTER DE ACORDO COM A PÁGINA
  const location = useLocation();
  useEffect(() => {

    const footer = document.getElementById("footer");
    if (footer) {
      location.pathname === "/diretores"
        ? (footer.style.backgroundColor = "transparent")
        : (footer.style.backgroundColor = "black");
    }
  }, [location.pathname]);

  return (
    <footer id="footer" className="footer">
      <img
        className="footer-logo"
        width={250}
        src={logoFooter}
        alt="Logotipo Simon Says"
      />

      <div className="footer-options">
        <div className="footer__redes-sociais">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/simonsaysfilmes/"
          >
            <IoLogoInstagram size={18} color="var(--color-gray)" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/simonsays-filmes/?originalSubdomain=br"
          >
            <FaLinkedinIn size={16} color="var(--color-gray)" />
          </a>
        </div>

        <div className="footer-links">
          <NavLink className="footer-links-option" to={"/contato"}>
            Contato
          </NavLink>
          <hr className="footer-links-divider" />
          <a className="footer-links-option" href="#">
            Termos de Uso
          </a>
          <hr className="footer-links-divider" />
          <a className="footer-links-option" href="#">
            Política de Privacidade
          </a>
        </div>

        <small className="footer-copyright">© 2022 Simon Says Filmes </small>
      </div>
    </footer>
  );
};

export default Footer;
