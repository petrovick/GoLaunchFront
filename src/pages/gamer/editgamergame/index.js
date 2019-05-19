import React, { Fragment, Component } from 'react';
import { Form, Input, Scope } from '@rocketseat/unform';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GamerActions } from '../../../store/ducks/gamer';

// import { Container } from './styles';
import { Container, FormularioDiv } from '../../../styles/lists';

const schema = Yup.object().shape({
  game: Yup.object().shape({
    _id: Yup.string().required(),
    name: Yup.string(),
  }),
  points: Yup.number(),
});

class EditGamerGame extends Component {
  state = {
    gamer: {
      name: 'John Doee',
      points: -1,
      address: {
        street: 'Sample Avenue',
      },
    },
  };

  initialData = {
    name: 'John Doe',
    address: {
      street: 'Sample Avenue',
    },
  };
  handleSubmit = data => {
    this.props.addGamePointRequest({
      game: data.game._id,
      points: data.points,
      redirectTo: '/gamer',
    });
  };

  componentDidMount = () => {
    this.props.listGamerGamesRequest();
  };

  render() {
    const { gamer } = this.state;
    return (
      <Container>
        <FormularioDiv>
          {this.props &&
            this.props.gamer &&
            this.props.gamer.data &&
            this.props.gamer.data.games &&
            this.props.gamer.data.games.map(item => (
              <Fragment>
                {item._id == this.props.match.params.game ? (
                  <Fragment>
                    <Form schema={schema} onSubmit={this.handleSubmit} initialData={item}>
                      <Input name="game.name" />
                      <Input name="game._id" hidden />
                      <Input name="points" />
                      <button type="submit">Save</button>
                    </Form>
                  </Fragment>
                ) : (
                  <div />
                )}
              </Fragment>
            ))}
        </FormularioDiv>
      </Container>
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
)(EditGamerGame);
