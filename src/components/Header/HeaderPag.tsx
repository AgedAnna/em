import { Layout } from "antd";
import ButtonCarrinho from "../Buttons/ButtonCarrinho";
import style from "./HeaderPag.module.css";
import logo from "../../public/imgs/logo.png";

const { Header } = Layout;

const HeaderPag = () => {
  return (
    <>
      <Header className={style.header}>
        <div className={style.img}>
          <img src={logo} className={style.img} />
        </div>
        <div>
          <ButtonCarrinho onClick={() => {}} />
        </div>
      </Header>
    </>
  );
};

export default HeaderPag;
