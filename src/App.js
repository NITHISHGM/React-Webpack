import React from "react";
import { hot } from "react-hot-loader/root";
import { Card } from "antd";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Card title={<span>{`title - ${name}`}</span>}>
          <h1>Hello {name}</h1>
        </Card>
      </>
    );
  }
}

export default hot(App);
