import React from "react";
// Gerenciamento de Estado
import { connect } from "react-redux";
// Routes
import { withRouter } from "react-router-dom";

const Home = () => {
  return <div>something</div>;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, null)(Home));
