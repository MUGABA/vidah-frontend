import React from "react";
import Joi from "joi-browser";

import Form from "./common/form";
import { registerUser } from "../services/userServices";
import auth from "../services/authService";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username")
      .email(),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.string().required()
  };
  componentDidMount() {}
  async doSubmit() {
    try {
      const response = await registerUser(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  }
  render() {
    return (
      <div>
        <h1>Register Here </h1>;
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
