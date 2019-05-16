import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SignupActions } from '../../store/ducks/signup';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  isGamer: Yup.boolean(),
  password: Yup.string(),
});

class Signup extends Component {
  componentDidMount() {}

  initialData = {
    name: '',
    email: '',
    isGamer: false,
  };

  handleSubmit = data => {
    console.tron.log(data);
    debugger;
    this.props.addSignupRequest(data);
  };

  render() {
    return (
      <Form schema={schema} initialData={this.initialData} onSubmit={this.handleSubmit}>
        <Input name="name" placeholder="Your name" />
        <Input name="email" placeholder="usermail@email.com" />
        <Input name="password" type="password" placeholder="YourH4rdP4ssw0rd" />
        <Input name="isGamer" type="checkbox" />
        <button type="submit">Save</button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  signup: state.signup,
});

const mapDispatchToProps = dispatch => bindActionCreators(SignupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
