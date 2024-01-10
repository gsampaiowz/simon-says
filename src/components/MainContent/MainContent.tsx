import "./MainContent.css";

type MainContentProps = {
  additionalClass?: String;
  children: React.ReactNode;
};

const MainContent = ({ additionalClass = "", children }: MainContentProps) => {
  return <div className={"main-content " + additionalClass}>{children}</div>;
};

export default MainContent;
