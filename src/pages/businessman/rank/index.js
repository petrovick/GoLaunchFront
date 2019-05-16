import React, { Component } from 'react';

// import { Container } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as BusinessmanActions } from '../../../store/ducks/businessman';

class Rank extends Component {
  componentDidMount = () => {
    this.props.listRankGameRequest(this.props.match.params.game);
  };
  render() {
    return (
      <div>
        <p>Got in here</p>
        {this.props.businessman &&
          this.props.businessman.gamers &&
          this.props.businessman.gamers.map(item => (
            <li key={item._id}>
              <p>
                {item.user.name} - {item.totalPoints}
              </p>
            </li>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  businessman: state.businessman,
});
const mapDispatchToProps = dispatch => bindActionCreators(BusinessmanActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rank);
