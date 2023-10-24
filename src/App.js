
import React from 'react';
import PlayersList from './PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const appStyles = {
    display: 'flex',    
    flexDirection: 'column', 
    alignItems: 'center',  
  };
  return (
    <div className="App" style={appStyles}>
      <h1>Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;
