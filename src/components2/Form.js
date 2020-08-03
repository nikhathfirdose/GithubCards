import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
    };
  }
  formSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${this.state.userName}`
    );
    this.props.txtFile(res.data);
  };
  formInput = (e) => {
    this.setState({ userName: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit} className="form-container">
          <input
            type="text"
            value={this.state.userName}
            onChange={this.formInput}
            placeholder="GitHub Username"
            required
          />
          <button>ADD USER</button>
        </form>
      </div>
    );
  }
}
