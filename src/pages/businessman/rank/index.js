import React, { Component } from "react";

// import { Container } from './styles';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as BusinessmanActions } from "../../../store/ducks/businessman";
import GamerList from "../../../components/GamerList";

class Rank extends Component {
  componentDidMount = () => {
    this.props.listRankGameRequest(this.props.match.params.game);
  };
  render() {
    return (
      <div>
        <GamerList
          gamers={this.props.businessman.gamers}
          game={this.props.match.params.game}
        />
      </div>
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
)(Rank);
