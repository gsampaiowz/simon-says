import MainContent from "@/components/MainContent/MainContent";
import "./AboutPage.css";
import Container from "@/components/Container/Container";
import { useContext } from "react";
import { LanguageContext } from "@/App";

const AboutPage = () => {
  const { language } = useContext(LanguageContext) || {};

  return (
    <MainContent additionalClass={"about-page-main"}>
      <Container additionalClass={"about-page"}>
        {language === "BR" ? (
          <>
            <h1 className="about-page-title">QUEM SOMOS?</h1>
            <hr className="about-page-divider" />
            <p>
              Bem-vindo à Simon Says Filmes, onde nos últimos 15 anos, não apenas
              produzimos filmes – construímos histórias.
            </p>
            <p>
              Na Simon Says, somos contadores de histórias com uma paixão por
              criar algo verdadeiramente extraordinário. Asseguramos não apenas
              entregas pontuais, mas oferecemos opções que ultrapassam o
              convencional.
            </p>
            <p>
              Com sedes estratégicas em Miami e Brasília, não nos limitamos a
              filmes publicitários; exploramos a criação de personagens em 3D,
              narrativas envolventes em motion graphics que ganham vida, além de
              produzir filmes institucionais, documentários e séries que
              cativam.
            </p>
            <p>
              Equipados com tecnologia de última geração, convidamos você a
              explorar nosso site e descobrir o poder da Simon Says Filmes.
              Descubra como podemos colaborar para criar algo que vai além do
              comum, algo que captura a essência da sua visão.
            </p>
          </>
        ) : language === "EN" ? (
          <>
            <h1 className="about-page-title">WHO ARE WE?</h1>
            <hr className="about-page-divider" />
            <p>
              Welcome to Simon Says Filmes, where for the past 15 years, we
              haven’t just produced films – we’ve built stories.
            </p>
            <p>
              At Simon Says, we are storytellers with a passion for creating
              something truly extraordinary. We ensure not just timely
              deliveries, but offer options that go beyond the conventional.
            </p>
            <p>
              With strategic headquarters in Miami and Brasília, we don’t limit
              ourselves to commercial films; we explore the creation of 3D
              characters, engaging narratives in motion graphics that come to
              life, as well as producing institutional films, documentaries, and
              series that captivate.
            </p>
            <p>
              Equipped with state-of-the-art technology, we invite you to
              explore our site and discover the power of Simon Says Filmes.
              Discover how we can collaborate to create something that goes
              beyond the ordinary, something that captures the essence of your
              vision.
            </p>
          </>
        ) : (
          <>
            <h1 className="about-page-title">¿QUIÉNES SOMOS?</h1>
            <hr className="about-page-divider" />
            <p>
              Bienvenido a Simon Says Filmes, donde en los últimos 15 años, no
              solo producimos películas, sino que construimos historias.
            </p>
            <p>
              En Simon Says, somos narradores con pasión por crear algo
              verdaderamente extraordinario. Aseguramos no solo entregas
              oportunas, sino que ofrecemos opciones que van más allá de lo
              convencional.
            </p>
            <p>
              Con sedes estratégicas en Miami y Brasilia, no nos limitamos a
              películas comerciales; exploramos la creación de personajes en 3D,
              narrativas atractivas en motion graphics que cobran vida, además
              de producir películas institucionales, documentales y series que
              cautivan.
            </p>
            <p>
              Equipados con tecnología de última generación, lo invitamos a
              explorar nuestro sitio y descubrir el poder de Simon Says Filmes.
              Descubra cómo podemos colaborar para crear algo que va más allá de
              lo común, algo que captura la esencia de su visión.
            </p>
          </>
        )}
      </Container>
    </MainContent>
  );
};

export default AboutPage;
