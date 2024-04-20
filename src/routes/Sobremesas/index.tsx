import Crud from "../../components/Crud/Crud";
import Sobremesas from "./Sobremesas";

const IndexSobremesas = () => {
  return (
    <>
      <Crud children={<Sobremesas />} />
    </>
  );
};

export default IndexSobremesas;