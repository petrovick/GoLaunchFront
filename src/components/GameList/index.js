import React, { Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Repository } from "../../styles/componentsList";
function funcGames(games) {
  debugger;
  console.log(games);
}

const GameList = ({ games, redirectTo, onClickAddPoints }) => (
  <Container>
    {funcGames(games)}
    {games &&
      games.map(item => (
        <Repository key={item._id}>
          <header>
            <strong>{item.game ? item.game.name : item.name}</strong>
            {item.points ? item.points : ""}
          </header>
          {redirectTo ? (
            <Link
              to={{
                pathname: `${redirectTo}${item._id}`
              }}
              params={{ game: item._id }}
            >
              Ver Ranking
            </Link>
          ) : (
            <Fragment>
              <i
                className="fa fa-plus"
                onClick={() => onClickAddPoints(item)}
              />
            </Fragment>
          )}
        </Repository>
      ))}
  </Container>
);

export default GameList;
