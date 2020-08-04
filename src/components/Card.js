import React, { Component } from "react";
import CardList from "./CardList";

export default class Card extends Component {
  render() {
    return (
      <div>
        <CardList list={this.props.data[0]} />
        <CardList list={this.props.data[1]} />
        <CardList list={this.props.data[2]} />
      </div>
    );
  }
}
