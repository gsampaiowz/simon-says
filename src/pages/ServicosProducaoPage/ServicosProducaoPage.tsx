import MainContent from "@/components/MainContent/MainContent";
import "./ServicosProducaoPage.css";
import Container from "@/components/Container/Container";
import { LanguageContext } from "@/App";
import { useContext } from "react";

const ServicosProducaoPage = () => {

  const {language} = useContext(LanguageContext) || {};

  return (
    <MainContent>
      <Container additionalClass="servicos-container">
        <h1>{language === "BR" ? "Serviços de Produção" : language === "EN" ? "Production Services" : "Servicios de Producción"}</h1>
        <hr />
        <p>
          {language === "BR" ? "A SimonSays Filmes é uma produtora com 14 anos de história,trabalhamos para as mais importantes marcas e agências do mercado,sempre com excelência nas suas entregas nacionais e internacionais.Oferecemos o serviço de produção para clientes internacionais que estejam interessados em produzir e filmar no Brasil. Caso queira fazer um orçamento, entre em contato." : language === "EN" ? "SimonSays Filmes is a production company with 14 years of history, we work for the most important brands and agencies in the market, always with excellence in their national and international deliveries. We offer production services for international clients who are interested in producing and filming in Brazil. If you want to make a budget, contact us." : "SimonSays Filmes es una productora con 14 años de historia, trabajamos para las marcas y agencias más importantes del mercado, siempre con excelencia en sus entregas nacionales e internacionales. Ofrecemos servicios de producción para clientes internacionales interesados en producir y filmar en Brasil. Si desea hacer un presupuesto, contáctenos."}
        </p>
      </Container>
    </MainContent>
  );
};

export default ServicosProducaoPage;
