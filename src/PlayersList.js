import React from 'react';
import Player from './Player';
import joueurs from './Players';

function PlayersList() {
  return (
    <div>
      {joueurs.map((joueur, index) => (
        <Player key={index} {...joueur} />
      ))}
    </div>
  );
}

export default PlayersList;

