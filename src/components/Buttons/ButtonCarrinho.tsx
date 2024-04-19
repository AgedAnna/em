import { ShopOutlined } from "@ant-design/icons";
import { Button } from "antd";
import style from "./Button.module.css";

interface ButtonCarrinhoProps {
  onClick: () => void;
}

const ButtonCarrinho: React.FC<ButtonCarrinhoProps> = ({ onClick }) => {
  return (
    <Button
      type="primary"
      shape="circle"
      icon={<ShopOutlined />}
      className={style.ButtonSale}
      onClick={onClick}
    />
  );
};

export default ButtonCarrinho;
