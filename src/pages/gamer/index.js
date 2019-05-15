import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as GamerActions } from "../../store/ducks/gamer";

// import { Container } from './styles';

class Gamer extends Component {
  componentDidMount = () => {
    this.props.listGamerRequest();
  };

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  gamer: state.gamer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(GamerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gamer);
