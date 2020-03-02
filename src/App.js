import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";

import Movies from "./componets/movies";
import NavBar from "./componets/navBar";
import Rentals from "./componets/rentals";
import Customers from "./componets/customers";
import MovieForm from "./componets/movieForm";
import NotFound from "./componets/notFound";
import LoginForm from "./componets/loginForm";
import Register from "./componets/registerUser";
import logOut from "./componets/logOut";
import ProtectedRoute from "./componets/common/protectedroute";

import auth from "./services/authService";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};
  async componentDidMount() {
    const user = await auth.getCurrentUser();

    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <ProtectedRoute exact path="/movies/:id" component={MovieForm} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/logout" component={logOut} />

            <Route exact path="/login" component={LoginForm} />
            <Route
              exact
              path="/movies"
              render={props => <Movies {...props} user={this.state.user} />}
            />
            <Route exact path="/rentals" component={Rentals} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
