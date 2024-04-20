import Crud from "../../components/Crud/Crud";
import Kits from "./Kits";

const IndexKits = () => {
  return (
    <>
      <Crud children={<Kits />} />
    </>
  );
};

export default IndexKits;