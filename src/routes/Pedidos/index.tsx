import Crud from "../../components/Crud/Crud";
import Pedidos from "./Pedidos";

const IndexPedidos = () => {
  return (
    <>
      <Crud children={<Pedidos />} />
    </>
  );
};

export default IndexPedidos;