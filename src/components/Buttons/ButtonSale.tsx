import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import style from "./Button.module.css";

interface ButtonSaleProps {
  onClick: () => void;
}

const ButtonSale: React.FC<ButtonSaleProps> = ({ onClick }) => {
  return (
    <Button
      type="primary"
      shape="circle"
      icon={<ShoppingCartOutlined />}
      className={style.ButtonSale}
      onClick={onClick}
    />
  );
};

export default ButtonSale;
