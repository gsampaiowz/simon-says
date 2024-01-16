import MainContent from "@/components/MainContent/MainContent";
import "./HomePage.css";
import Container from "./../../components/Container/Container";
import { IoArrowDownSharp } from "react-icons/io5";

const HomePage = () => {
  return (
    <MainContent>
      <Container additionalClass="home-page-flex">
        <video className="home-page-video-loop" autoPlay loop playsInline muted src="https://d34mhl4acb538n.cloudfront.net/2cc9aae9139d15fb5fe1065234dda41e.mp4"/>
        <IoArrowDownSharp
          className="home-down-arrow-icon"
          size={100}
          color="var(--color-black)"
        />
      </Container>
    </MainContent>
  );
};

export default HomePage;
