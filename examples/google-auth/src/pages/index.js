import React, { Component } from "react";
import "./index.css";

const axios = require("axios");

export default class IndexPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      authBox: "",
      labelBox: [],
    };
  }

  setLabelsBox(labels) {
    if (labels !== null) {
      this.setState({ labelBox: labels });
    }
  }

  handleLabelFetch = () => {
    console.log({ this: this });

    const res = axios
      .get("/api/labels", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          tokenString: window.location.search,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ labelBox: response.data.message });
      });
  };

  setAuthBox(token) {
    if (this.state.authBox === "" && token !== null) {
      this.setState({ authBox: token });
    }
  }

  getAuthBox() {
    if (this.state.authBox != "") {
      return (
        <div>
          <p></p>
          <label htmlFor="text">
            <b>Auth Token:</b>
          </label>
          {this.state.authBox}
          <p></p>
        </div>
      );
    }
    return null;
  }

  getLabelsBox() {
    var labels = [];

    labels.push(
      <div>
        <p></p>
      </div>
    );
    this.state.labelBox.forEach((label) => {
      labels.push(<div>- {label}</div>);
    });

    return labels;
  }
  render() {
    var urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("code");
    this.setAuthBox(token);

    var authButton;
    var fetchButton;

    if (token != null) {
      authButton = (
        <form action="/api/logout" method="POST">
          <input
            type="hidden"
            name="tokenString"
            value={window.location.search}
          />
          <button type="submit">Logout</button>
        </form>
      );

      fetchButton = (
        <button onClick={this.handleLabelFetch}>Fetch Labels</button>
      );
    } else {
      authButton = (
        <form action="/api/login" method="POST">
          <button type="submit">Login</button>
          <p></p>
        </form>
      );
      fetchButton = (
        <form>
          {" "}
          <button type="button" disabled>
            Fetch Labels
          </button>
        </form>
      );
    }
    return (
      <main>
        <div>
          <h2>Login via Google Oauth</h2>
          {authButton}
          {this.getAuthBox()}
          {fetchButton}
          {this.getLabelsBox()}
        </div>
      </main>
    );
  }
}
