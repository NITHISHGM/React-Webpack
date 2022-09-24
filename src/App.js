import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "antd";
import SidebarPage from "./Components/Layouts/Sidebar";
import HeaderPage from "./Components/Layouts/Header";
import ContentPage from "./Components/Layouts/Content";
import FooterPages from "./Components/Layouts/Footer";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <div>
          <Layout>
            <SidebarPage />
            <Layout className="site-layout">
              <HeaderPage />
              <ContentPage />
              <FooterPages />
            </Layout>
          </Layout>
        </div>
      </>
    );
  }
}

export default hot(App);
