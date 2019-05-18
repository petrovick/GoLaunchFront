import React, { Component, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Container,
  Formulario,
  ContainerButton,
  Label
} from "../../styles/lists";
import GameList from "../../components/GameList/index";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as BusinessmanActions } from "../../store/ducks/businessman";

class Businessman extends Component {
  componentDidMount = () => {
    console.log(this.props);
    this.props.listGamesRequest();
  };

  render() {
    return (
      <Container>
        { this.props &&
          this.props.businessman && 
          this.props.businessman.data ? (
        <GameList
          games={this.props.businessman.data}
          redirectTo="/businessman/gamerank/"
          />) : <div /> }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  businessman: state.businessman
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(BusinessmanActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Businessman);
