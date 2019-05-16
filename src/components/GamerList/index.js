import React from "react";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Repository } from "../../styles/componentsList";

function SearchPointsOnGame(game, gamer) {
  if (game) {
    debugger;
    var games2 = gamer.games.filter(gameFilter => {
      debugger;
      console.tron.log("Filtered game: " + game);
      console.tron.log(gameFilter);
      return gameFilter.game._id == game;
    });
    console.tron.error("games2:" + JSON.stringify(games2));
    return games2[0].points;
  }
  return "";
}

const GamerList = ({ gamers, game }) => (
  <Container>
    {gamers.map(item => (
      <Repository>
        <header>
          <strong>{item.user.name}</strong>
          <p>Pontos no Game:{SearchPointsOnGame(game, item)}</p>
          <p>Total de pontos: {item.totalPoints}</p>
        </header>
      </Repository>
    ))}
  </Container>
);

export default GamerList;
