import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "antd";
import SidebarPage from "./Components/Layouts/Sidebar";
import HeaderPage from "./Components/Layouts/Header";
import ContentPage from "./Components/Layouts/Content";
import FooterPages from "./Components/Layouts/Footer";
import { useSelector } from "react-redux";

const App = () => {
  const SideBarToggleData = useSelector(
    (state) => state.SideBarToggle.SideBarToggle
  );
  return (
    <div>
      <Layout hasSider>
        <SidebarPage />
        <Layout
          className="site-layout"
          style={{
            marginLeft: SideBarToggleData ? 70 : 200,
          }}
        >
          <HeaderPage />
          <ContentPage />
          <FooterPages />
        </Layout>
      </Layout>
    </div>
  );
};

export default hot(App);
