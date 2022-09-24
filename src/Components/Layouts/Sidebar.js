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
    >
      SidebarPage
    </Sider>
  );
};

export default SidebarPage;
