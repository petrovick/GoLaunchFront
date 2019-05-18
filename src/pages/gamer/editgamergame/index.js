import React, { Fragment, Component } from 'react';
import { Form, Input, Scope } from '@rocketseat/unform';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GamerActions } from '../../../store/ducks/gamer';

// import { Container } from './styles';
import { Container, Formulario } from '../../../styles/lists';

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
        <Formulario>
          {this.props &&
            this.props.gamer &&
            this.props.gamer.data &&
            this.props.gamer.data.games &&
            this.props.gamer.data.games.map(item => (
              <div>
                <p>
                  {item._id == this.props.match.params.game ? (
                    <Fragment>
                      <p>NÃO SEJA UM COVARDE!!</p>
                      <p>Seja um Guerreiro, volte a aumente seus pontos 1 a 1.</p>
                      <Form onSubmit={this.handleSubmit} initialData={item}>
                        <Input name="game.name" />
                        <Input name="game._id" hidden />
                        <Input name="points" />
                        <button type="submit">Save</button>
                      </Form>
                    </Fragment>
                  ) : (
                    <div />
                  )}
                </p>
              </div>
            ))}
        </Formulario>
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
