import React, { Component } from "react";
import auth from "../services/authService";

class LogOut extends Component {
  componentDidMount() {
    auth.logOut();

    window.location = "/";
  }

  render() {
    return null;
  }
}

export default LogOut;
