import React, { Component, Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Container, Formulario, ContainerButton } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Input, Scope } from '@rocketseat/unform';

import { Creators as GamerActions } from '../../store/ducks/login';

class Login extends Component {
  state = {
    loading: false,
  };

  handleSubmit = async data => {
    console.log(data);
    debugger;
    try {
      this.props.addLoginRequest(data);
    } catch (err) {
      console.log(err);
      debugger;
    }
    /**
     * {
     *   name: 'Diego',
     *   address: { street: "Name of street", number: 123 }
     * }
     */
  };
  render() {
    return (
      <Container>
        <Formulario>
          <Form onSubmit={this.handleSubmit}>
            <Input name="email" placeholder="Your E-mail" />
            <Input name="password" placeholder="Type your password" />
            {this.props.login.error ? <span>{this.props.login.error}</span> : <span />}
            <ContainerButton>
              <Link
                to={{
                  pathname: `/signup`,
                }}
              >
                Signup
              </Link>
              <button type="submit">
                {this.props.login.loading ? <i className="fa fa-spinner" /> : <span>Login</span>}
              </button>
            </ContainerButton>
          </Form>
        </Formulario>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => bindActionCreators(GamerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
