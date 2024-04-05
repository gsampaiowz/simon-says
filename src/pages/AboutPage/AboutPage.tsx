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
              A SimonSays Filmes, situada no coração de São Paulo, é uma
              produtora de conteúdo audiovisual de alta qualidade, especializada
              na criação de filmes publicitários, séries, documentários, e na
              realização de serviços de produção com parceiros. Somos
              reconhecidos pela nossa competência em capturar o vivo dinamismo
              do live-action, seja para televisão, streaming ou plataformas
              digitais.
              <br />
              Desde 2008, nosso portfólio inclui colaborações com marcas de
              prestígio, como CBF, VTEX, Petronas, SECOM, Coca-Cola, Localiza,
              Disney, BMW, Honda, Yamaha, Mini Cooper, Safra, Jeep, CAOA, Tokio
              Marine, Abbott, Abbvie, Ache, Zeiss, entre outras. Nosso gama de
              serviços é vasto e inclui desde o desenvolvimento inicial de
              conceitos até a entrega final, abrangendo roteirização, edição e
              pós-produção de alto padrão. <br />
              Nos destacamos também na criação de motion graphics, personagens e
              filmes em 3D, explorando narrativas visuais. Com instalações
              adicionais em Miami e Brasília, ampliamos nosso alcance para
              co-produções internacionais, promovendo não apenas a visibilidade
              global dos projetos, mas também a sua relevância cultural e
              comercial. <br />
              Na SimonSays Filmes, cada história é contada com inovação e
              criatividade técnica. Se está em busca de uma produtora que
              entende de filmes publicitários, séries, documentários, motion
              graphics, personagens e filmes 3D, entre em contato conosco.
              Estamos prontos para dar vida ao seu próximo projeto audiovisual.
            </p>
          </>
        ) : language === "EN" ? (
          <>
            <h1 className="about-page-title">WHO ARE WE?</h1>
            <hr className="about-page-divider" />
            <p>
              SimonSays Films, located in the heart of São Paulo, is a
              high-quality audiovisual content producer, specialized in creating
              commercials, series, documentaries, and providing production
              services with partners. We are recognized for our ability to
              capture the lively dynamism of live-action for television,
              streaming, or digital platforms. <br />
              Since 2008, our portfolio has included collaborations with
              prestigious brands such as CBF, VTEX, Petronas, SECOM, Coca-Cola,
              Localiza, Disney, BMW, Honda, Yamaha, Mini Cooper, Safra, Jeep,
              CAOA, Tokio Marine, Abbott, Abbvie, Ache, Zeiss,, and others. Our
              range of services is extensive and includes everything from
              initial concept development to final delivery, covering scripting,
              editing, and high-standard post-production. <br />
              We also stand out in creating motion graphics, characters, and 3D
              films, exploring visual narratives. With additional facilities in
              Miami and Brasília, we expand our reach for international
              co-productions, ensuring not only global visibility for our
              projects but also their cultural and commercial relevance. <br />
              At SimonSays Films, every story is told with innovation and
              technical creativity. If you are looking for a producer that
              understands commercials, series, documentaries, motion graphics,
              characters, and 3D films, contact us. We are ready to bring your
              next audiovisual project to life.
            </p>
          </>
        ) : (
          <>
            <h1 className="about-page-title">¿QUIÉNES SOMOS?</h1>
            <hr className="about-page-divider" />
            <p>
              SimonSays Filmes, ubicada en el corazón de São Paulo, es una
              productora de contenido audiovisual de alta calidad, especializada
              en la creación de anuncios publicitarios, series, documentales y
              en la prestación de servicios de producción con socios. Somos
              reconocidos por nuestra habilidad para capturar el dinamismo vivo
              del live-action para televisión, streaming o plataformas
              digitales. <br />
              Desde 2008, nuestro portafolio ha incluido colaboraciones con
              marcas prestigiosas como CBF, VTEX, Petronas, SECOM, Coca-Cola,
              Localiza, Disney, BMW, Honda, Yamaha, Mini Cooper, Safra, Jeep,
              CAOA, Tokio Marine, Abbott, Abbvie, Ache, Zeiss, y otras. Nuestra
              gama de servicios es amplia e incluye desde el desarrollo de
              conceptos iniciales hasta la entrega final, abarcando
              guionización, edición y post-producción de alto estándar. <br />
              También nos destacamos en la creación de gráficos en movimiento,
              personajes y películas en 3D, explorando narrativas visuales. Con
              instalaciones adicionales en Miami y Brasília, ampliamos nuestro
              alcance para coproducciones internacionales, asegurando no solo la
              visibilidad global de nuestros proyectos, sino también su
              relevancia cultural y comercial. <br />
              En SimonSays Filmes, cada historia se cuenta con innovación y
              creatividad técnica. Si está buscando una productora que entiende
              de anuncios publicitarios, series, documentales, gráficos en
              movimiento, personajes y películas en 3D, contáctenos. Estamos
              listos para dar vida a su próximo proyecto audiovisual.
            </p>
          </>
        )}
      </Container>
    </MainContent>
  );
};

export default AboutPage;
