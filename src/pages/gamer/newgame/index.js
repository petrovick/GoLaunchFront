import React, { useRef, useEffect } from 'react';

import { Form, Input } from '@rocketseat/unform';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { Creators as GamerActions } from '../../../store/ducks/gamer';

import { Container, Formulario } from '../../../styles/lists';

const NewGame = (props) => {
  function handleSubmit(data) {
    console.log(data);
    debugger;
    props.addGamerGameRequest({
      name: data.name,
    });
  }

  return (
    <Container>
      <Formulario>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" />
          <button type="submit">
            <i className="fa fa-save" />
          </button>
        </Form>
      </Formulario>
    </Container>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(GamerActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(NewGame);
