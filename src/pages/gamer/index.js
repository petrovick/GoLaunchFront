import React, { Component, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Container,
  Formulario,
  ContainerButton,
  Label
} from "../../styles/lists";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as GamerActions } from "../../store/ducks/gamer";

import GameList from "../../components/GameList";

class Gamer extends Component {
  componentDidMount = () => {
    debugger;
    this.props.listGamerGamesRequest();
  };

  onClickAddPoints = item => {
    debugger;
    this.props.addGamePointRequest({
      game: item.game._id,
      points: item.points + 1
    });
  };

  render() {
    return (
      <Container>
        <Link
          to={{
            pathname: "/gamer/newgame"
          }}
        >
          <i className="fa fa-plus" />
        </Link>
        {this.props.gamer && this.props.gamer.data && (
          <GameList
            games={this.props.gamer.data.games}
            onClickAddPoints={this.onClickAddPoints}
          />
        )}
      </Container>
    );
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
