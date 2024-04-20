import Crud from "../../components/Crud/Crud";
import Salgados from "./Salgados";

const IndexSalgados = () => {
  return (
    <>
      <Crud children={<Salgados />} />
    </>
  );
};

export default IndexSalgados;