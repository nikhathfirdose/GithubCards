import React, { Component } from "react";
import "./style.css";

export default class CardList extends Component {
  render() {
    return (
      <div>
        <div className="cards-container">
          <img
            alt="userimage"
            src={this.props.lis.avatar_url}
            className="cards-image"
          />
          <div className="details">
            <h2 className="card-name"> {this.props.lis.name} </h2>
            <p className="company">Joined: {this.props.lis.created_at}</p>
          </div>
        </div>
      </div>
    );
  }
}
