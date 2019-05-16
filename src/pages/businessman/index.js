import React, { Component, Fragment } from 'react';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { Container } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as BusinessmanActions } from '../../store/ducks/businessman';

class Businessman extends Component {
  componentDidMount = () => {
    debugger;
    console.tron.log(this.props);
    this.props.listGamesRequest();
  };

  render() {
    return (
      <Fragment>
        <ul />
      </Fragment>
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
)(Businessman);
