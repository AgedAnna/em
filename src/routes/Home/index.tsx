import Crud from "../../components/Crud/Crud";
import Home from "./Home";
import CardCakes from "./Card";

const IndexHome = () => {
  return (
    <>
      <Crud children={<Home cards={<CardCakes />} />} />
    </>
  );
};

export default IndexHome;
