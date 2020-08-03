import React, { Component } from "react";
import Card from "./components2/Card";
import Form from "./components2/Form";

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  addProfile = (profileData) => {
    this.setState((prevState) => ({
      data: [...prevState.data, profileData],
    }));
    console.log(profileData);
  };
  render() {
    return (
      <div className="page">
        <div>{this.props.title}</div>
        <Form txtFile={this.addProfile} />
        <Card data={this.state.data} />
      </div>
    );
  }
}
