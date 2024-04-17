import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import React from "react";
import SideBar from "../SideBar/SideBar";

interface CrudProps {
  children: React.ReactNode;
}

const Crud: React.FC<CrudProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "calc(100vh - 112px)" }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Elizângela Melo ©2024 Created by Anna Beatryz
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Crud;
