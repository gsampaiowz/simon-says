import { useNavigate } from "react-router-dom";
import "./Header.css";
import logoHeader from "@/assets/img/logo-header.png";
import { IoMdMenu } from "react-icons/io";
import { useContext, useEffect, useRef, useState } from "react";
import Navbar from "./../Navbar/Navbar";
import { IoCloseSharp } from "react-icons/io5";
import { LanguageContext } from "@/App";

const Header = () => {
  const navigate = useNavigate();

  const navbarRef = useRef<HTMLElement | null>(null);

  const headerRef = useRef<HTMLElement | null>(null);

  const { changeLanguage, language } = useContext(LanguageContext) || {};

  const [changeLanguageOpen, setChangeLanguageOpen] = useState(false);

  //LÓGICA PARA ADICIONAR BORDER AO HEADER DE ACORDO COM O SCROLL

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && navbarRef.current) {
        if (navbarRef.current.scrollTop > 0) {
          headerRef.current.classList.add("borderClass");
        } else {
          headerRef.current.classList.remove("borderClass");
        }
      }
    };

    if (headerRef.current && navbarRef.current) {
      navbarRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (headerRef.current && navbarRef.current) {
        navbarRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const [exibeNav, setExibeNav] = useState(false);

  return (
    <header ref={headerRef} className="header">
      <div className="header-flex">
        <div className="logo-hover">
          <img
            onClick={() => {
              navigate("/");
              setExibeNav(false);
            }}
            className="logo-header"
            src={logoHeader}
            alt="Logotipo Simon Says"
          />
        </div>
        <div className="menu-language">
          <div className="change-language">
            <h5 onClick={() => setChangeLanguageOpen(!changeLanguageOpen)}>
              {language}
            </h5>
              <div onClick={() => setChangeLanguageOpen(!changeLanguageOpen)} className={`idiomas${changeLanguageOpen ? " idiomas-open" : ""}`}>
                <button onClick={() => changeLanguage!("EN")}>
                  {language === "BR"
                    ? "Inglês"
                    : language === "EN"
                    ? "English"
                    : "Inglés"}
                </button>
                <button onClick={() => changeLanguage!("BR")}>
                  {language === "BR"
                    ? "Português"
                    : language === "EN"
                    ? "Portuguese"
                    : "Portugués"}
                </button>
                <button onClick={() => changeLanguage!("ESP")}>
                  {language === "BR"
                    ? "Espanhol"
                    : language === "EN"
                    ? "Spanish"
                    : "Español"}
                </button>
              </div>
          </div>

          {exibeNav ? (
            <IoCloseSharp
              className="menu-nav-header"
              size={50}
              onClick={() => {
                setExibeNav(false);
                navbarRef.current?.scrollTo(0, 0);
              }}
            />
          ) : (
            <IoMdMenu
              onClick={() => setExibeNav(true)}
              className="menu-nav-header"
              size={50}
            />
          )}
        </div>
        <Navbar
          setExibeNav={setExibeNav}
          navbarRef={navbarRef}
          exibeNav={exibeNav}
        />
      </div>
    </header>
  );
};

export default Header;
