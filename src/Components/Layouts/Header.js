import React from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SideBarToggle } from "../../redux/action/Index";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Header } = Layout;

const HeaderPage = () => {
  const dispatch = useDispatch();
  const SideBarToggleData = useSelector(
    (state) => state.SideBarToggle.SideBarToggle
  );

  return (
    <Header className="site-layout-header">
      {React.createElement(
        SideBarToggleData ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: "sider-trigger",
          onClick: () => dispatch(SideBarToggle()),
        }
      )}
    </Header>
  );
};

export default HeaderPage;
