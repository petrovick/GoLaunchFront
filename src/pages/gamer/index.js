import React, { Component, Fragment } from 'react';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { Container } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as GamerActions } from '../../store/ducks/gamer';

class Gamer extends Component {
  componentDidMount = () => {
    debugger;
    this.props.listGamerGamesRequest();
  };

  render() {
    return (
      <Fragment>
        <ul>
          {this.props.gamer &&
            this.props.gamer.data.games &&
            this.props.gamer.data.games.map(item => (
              <li key={item._id}>
                <p>
                  {item.game.name} - {item.points}
                </p>
              </li>
            ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  gamer: state.gamer,
});
const mapDispatchToProps = dispatch => bindActionCreators(GamerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gamer);
