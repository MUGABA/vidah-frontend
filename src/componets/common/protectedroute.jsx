import React from "react";
import { Route, Redirect } from "react-router-dom";

import auth from "../../services/authService";

const ProtectedRoute = ({ render, component: Component, ...otherProps }) => {
  return (
    <Route
      exact
      {...otherProps}
      render={props =>
        !auth.getCurrentUser() ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        ) : Component ? (
          <Component {...otherProps} />
        ) : (
          (render = { ...otherProps })
        )
      }
    />
  );
};

export default ProtectedRoute;
