import React, { Component } from "react";
import CardList from "./CardList";

export default class Card extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((list) => (
          <CardList lis={list} key={list.id} />
        ))}
      </div>
    );
  }
}
