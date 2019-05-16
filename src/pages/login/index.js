import React, { Component, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

import { Container, Formulario, ContainerButton } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, Input, Scope } from "@rocketseat/unform";

import { Creators as GamerActions } from "../../store/ducks/login";

class Login extends Component {
  state = {
    loading: false
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
            <ContainerButton>
              <Link
                to={{
                  pathname: `/signup`
                }}
              >
                Signup
              </Link>
              <button type="submit">Login</button>
            </ContainerButton>
          </Form>
        </Formulario>
      </Container>
    );
  }
}
/*
const mapStateToProps = state => ({
  favorites: state.favorites
});
*/
const mapDispatchToProps = dispatch =>
  bindActionCreators(GamerActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Login);
