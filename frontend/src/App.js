import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Component from "./pages/App";
import Questionario from "./pages/Questionario/Questionario"
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// Gerenciamento de Estado
import { connect } from "react-redux";

const App = ({ isAuthenticated }) => {
  return (
    <HashRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Component} />
        <Route path="/app/questionario" component={Questionario}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        {/* <PublicRoute path="/login" component={Login} /> */}
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
