import Crud from "../../components/Crud/Crud";
import Home from "./Home";
import CardCakes from "./Card";
import CarouselCakes from "./CarouselBolos";

const IndexHome = () => {
  return (
    <Crud>
      <Home carousel={<CarouselCakes />} cards={<CardCakes />} />
    </Crud>
  );
};

export default IndexHome;
