import React, { Component } from 'react';
import { Form, Input, Scope } from '@rocketseat/unform';

// import { Container } from './styles';
import { Container, Formulario } from '../../../styles/lists';

export default class EditGamerGame extends Component {
  initialData = {
    name: 'John Doe',
    address: {
      street: 'Sample Avenue',
    },
  };
  handleSubmit(data) {}

  componentDidMount = () => {
    console.log(this.props.match.params.gamergame);
  };

  render() {
    return (
      <Container>
        <Formulario>
          <Form onSubmit={this.handleSubmit} initialData={this.initialData}>
            <Input name="name" />

            <Scope path="address">
              <Input name="street" />
              <Input name="number" />
            </Scope>

            <button type="submit">Save</button>
          </Form>
        </Formulario>
      </Container>
    );
  }
}
