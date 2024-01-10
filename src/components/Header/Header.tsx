import { useNavigate } from "react-router-dom";
import "./Header.css";
import logoHeader from "@/assets/img/logo-header.png";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Navbar from "./../Navbar/Navbar";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();

  const navbarRef = useRef<HTMLElement | null>(null);

  const headerRef = useRef<HTMLElement | null>(null);

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
      <img
        onClick={() => navigate("/")}
        className="logo-header"
        src={logoHeader}
        alt="Logotipo Simon Says"
      />

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
      <Navbar setExibeNav={setExibeNav} navbarRef={navbarRef} exibeNav={exibeNav} />
    </header>
  );
};

export default Header;
