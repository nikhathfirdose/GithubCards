import React, { Component } from "react";
import Card from "./components2/Card";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "Google",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

export default class App2 extends Component {
  render() {
    return (
      <div className="page">
        <div>{this.props.title}</div>
        <Card data={testData} />
      </div>
    );
  }
}
