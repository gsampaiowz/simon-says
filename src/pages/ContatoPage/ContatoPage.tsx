import MainContent from "@/components/MainContent/MainContent";
import "./ContatoPage.css";
import Container from "@/components/Container/Container";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const ContatoPage = () => {
  return (
    <MainContent additionalClass={"contato-page-main"}>
      <Container additionalClass={"contato-page"}>
        <h2 className="contato-page-title">
          CANAIS DE CONTATO
        </h2>
        <div className="contatos-locais">
          <div className="contato">
            <h4>SÃO PAULO</h4>
            <p>
              Rua Juventus, 92 <br />
              Mooca – São Paulo/SP <br />
              CEP: 03124-020
            </p>
          </div>
          <div className="contato">
            <h4>BRASÍLIA</h4>
            <p>
              SHN Quadra 1 Bloco A Conjunto A <br /> Sala 104 Brasília/DF <br />
              CEP: 70.701-000
            </p>
          </div>
          <div className="contato">
            <h4>MIAMI</h4>
            <p>
              101 SE 3rd Avenue <br />
              Suite 301 <br />
              Dania Beach FL 33004 <br />
              USA
            </p>
          </div>
        </div>
        <div className="contato-flex">
          <small className="contato-info">
            <HiOutlineMailOpen color={"white"} size={25} />
            contato@simonsaysfilmes.com.br
          </small>
          <small className="contato-info">
            <FaWhatsapp color={"white"} size={25} />
            +55 11 9.5555-6971
          </small>
        </div>
      </Container>
    </MainContent>
  );
};

export default ContatoPage;
