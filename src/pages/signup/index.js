import React, { Component } from 'react';
import * as Yup from 'yup';
import Select from 'react-select';

import { Container, Formulario, ContainerButton, Label } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Input } from '@rocketseat/unform';

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
  state = {
    selectedOption: null,
    options: [{ value: true, label: 'Gamer' }, { value: false, label: 'Businessman' }],
    initialData: {
      name: '',
      email: '',
      isGamer: false,
    },
  };

  componentDidMount() {}

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handleSubmit = data => {
    const { selectedOption } = this.state;
    debugger;
    data.isGamer = selectedOption.value;
    console.tron.log(data);
    this.props.addSignupRequest(data);
  };

  render() {
    const { selectedOption, options, initialData } = this.state;
    return (
      <Container>
        <Formulario>
          <Form schema={schema} initialData={initialData} onSubmit={this.handleSubmit}>
            <Input name="name" placeholder="Your name" />
            <Input name="email" placeholder="usermail@email.com" />
            <Input name="password" type="password" placeholder="YourH4rdP4ssw0rd" />

            <Select value={selectedOption} onChange={this.handleChange} options={options} />

            <ContainerButton>
              <Label>Are you a Gamer?</Label>
              <Input name="isGamer" type="checkbox" />
            </ContainerButton>
            <button type="submit">Save</button>
          </Form>
        </Formulario>
      </Container>
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
