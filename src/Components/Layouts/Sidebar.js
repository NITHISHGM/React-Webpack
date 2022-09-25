import React from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";

const { Sider } = Layout;

const SidebarPage = () => {
  const SideBarToggleData = useSelector(
    (state) => state.SideBarToggle.SideBarToggle
  );

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={SideBarToggleData}
      className="site-layout-sider"
      breakpoint="lg"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
    </Sider>
  );
};

export default SidebarPage;
