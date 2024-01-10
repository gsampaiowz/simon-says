import "./Container.css";

type ContainerProps = {
  additionalClass?: String;
  children?: React.ReactNode;
};

const Container = ({ additionalClass = "", children }: ContainerProps) => {
  return <div className={"container " + additionalClass}>{children}</div>;
};

export default Container;
