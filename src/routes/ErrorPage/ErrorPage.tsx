import style from "./ErrorPage.module.css";
import imgBatedeira from "../../public/imgs/giphy.gif";
import { Row } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const ErrorPage = () => {
  return (
    <div className={style.pagErro}>
      <Row>
        <img src={imgBatedeira} />
      </Row>
      <Row>
        <p className={style.text}>
          {" "}
          <InfoCircleOutlined className={style.icon} />
          Um erro inesperado aconteceu, recarregue a página
        </p>
      </Row>
    </div>
  );
};

export default ErrorPage;
