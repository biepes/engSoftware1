import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Component from "./pages/App/App";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// Gerenciamento de Estado
import { connect } from "react-redux";

const App = ({ isAuthenticated }) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/home" />}/>
        <Route exact path="/app" render={() => <Redirect to="/app/home" />} />
        <PrivateRoute path="/app" component={Component} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={SignUp} />
      </Switch>
    </HashRouter>
  );
  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        props={rest}
        render={(props) =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        props={rest}
        render={(props) =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps, null)(App);
