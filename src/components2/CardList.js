import React, { Component } from "react";
import "./style.css";

export default class CardList extends Component {
  render() {
    return (
      <div>
        <div className="cards-container">
          <img src={this.props.list.avatar_url} className="cards-image" />
          <div className="details">
            <h2 className="card-name"> {this.props.list.name} </h2>
            <p className="company">{this.props.list.company}</p>
          </div>
        </div>
      </div>
    );
  }
}
