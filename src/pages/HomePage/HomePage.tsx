import MainContent from "@/components/MainContent/MainContent";
import "./HomePage.css";
import Container from "./../../components/Container/Container";
import { IoArrowDownSharp } from "react-icons/io5";
import clipe from "@/assets/videos/clipe-homepage.mp4";

const HomePage = () => {
  return (
    <MainContent>
      <Container additionalClass="home-page-flex">
        <video className="home-page-video-loop" autoPlay loop muted src={clipe}/>
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
