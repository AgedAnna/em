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
        <Menu.Item
          key="1"
          icon={
            <span
              className="material-symbols-outlined"
              style={{ color: "#ffff", fontSize: "20px" }}
            >
              cake
            </span>
          }
        >
          <Link to="/" className={style.itemMenu}>
            Bolos e Tortas
          </Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={
            <span
              className="material-symbols-outlined"
              style={{ color: "#ffff", fontSize: "20px" }}
            >
              cookie
            </span>
          }
        >
          <Link to="/sobremesas" className={style.itemMenu}>
            Sobremesas
          </Link>
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={
            <span
              className="material-symbols-outlined"
              style={{ color: "#ffff", fontSize: "20px" }}
            >
              bakery_dining
            </span>
          }
        >
          <Link to="/salgados" className={style.itemMenu}>
            Salgados
          </Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={
            <span
              className="material-symbols-outlined"
              style={{ color: "#ffff", fontSize: "20px" }}
            >
              menu_book
            </span>
          }
        >
          <Link to="/kits" className={style.itemMenu}>
            Kits
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
