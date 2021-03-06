import React from "react";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Repository } from "../../styles/componentsList";

function SearchPointsOnGame(game, gamer) {
  console.log("Filtered game: " + game);
  console.log(gamer);
  if (game) {
    debugger;
    var games2 = gamer.games.filter(gameFilter => {
      return gameFilter.game._id == game;
    });
    console.log("games2:" + JSON.stringify(games2));
    if(games2.length > 0)
      return games2[0].points;
    return 0;
  }
  return "";
}

const GamerList = ({ gamers, game }) => (
  <Container>

    {gamers && gamers.map(item => (
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

GamerList.propTypes = {
  gamers: PropTypes.arrayOf(
    PropTypes.shape({
      user: {
        name: PropTypes.string,
      },
      totalPoints: PropTypes.number,
    }),
  ),
};

export default GamerList;
