import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Repository } from '../../styles/componentsList';

const GameList = ({
  games, redirectTo, editTo, onClickAddPoints,
}) => (
  <Container>
    
    {games
      && games.map(item => (
        <Repository key={item._id}>
          <header>
            <strong>{item.game ? item.game.name : item.name}</strong>
            {item.points ? item.points : ''}
          </header>
          {redirectTo ? (
            <Link
              to={{
                pathname: `${redirectTo}${item._id}`,
              }}
              params={{ game: item._id }}
            >
              Ver Ranking
            </Link>
          ) : (
            <Fragment>
              <i className="fa fa-plus" onClick={() => onClickAddPoints(item)} />
            </Fragment>
          )}

          {editTo ? (
            <Link
              to={{
                pathname: `${editTo}${item._id}`,
              }}
              params={{
                game: item._id
              }}
            >
              <i className="fa fa-pencil" />
            </Link>
          ) : (
            ' '
          )}
        </Repository>
      ))}
  </Container>
);

GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      points: PropTypes.number,
    }),
  ),
};

export default GameList;
