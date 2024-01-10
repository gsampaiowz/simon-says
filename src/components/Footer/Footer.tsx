import "./Footer.css";
import logoFooter from "@/assets/img/logo-footer.png";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa"; // Import the necessary package

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-logo" width={250} src={logoFooter} alt="Logotipo Simon Says" />

      <div className="footer-options">
        <div className="footer__redes-sociais">
          <IoLogoInstagram size={18} color="var(--color-gray)" />
          <FaLinkedinIn size={16} color="var(--color-gray)" />
        </div>

        <div className="footer-links">
          <a className="footer-links-option" href="/">Contato</a>
          <hr className="footer-links-divider" />
          <a className="footer-links-option" href="/">Termos de Uso</a>
          <hr className="footer-links-divider" />
          <a className="footer-links-option" href="/">Política de Privacidade</a>
        </div>

        <small className="footer-copyright">© 2022 Simon Says Filmes </small>
      </div>
    </footer>
  );
};

export default Footer;
