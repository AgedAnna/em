import {
  HomeOutlined,
  ShoppingOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import style from "./SideBar.module.css";

const SideBar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className={style.SideBar}
    >
      <Menu className={style.menu} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined className={style.itemMenu} />}>
          <Link to="/" className={style.itemMenu}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<ShoppingOutlined className={style.itemMenu} />}
        >
          <Link to="/pedidos" className={style.itemMenu}>
            Pedidos
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined className={style.itemMenu} />}>
          <Link to="/nav3" className={style.itemMenu}>
            nav 3
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
