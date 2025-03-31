import React, { useState } from 'react';
import './index.css';
import { flipSplashArea } from '../../';
import Grid from '../../src/components/grid';

const imageSrc = 'https://upload.wikimedia.org/wikipedia/commons/2/28/JPG_Test.jpg';
const gridSize = 5; // 5x5 grid

function App() {
  const [tiles, setTiles] = useState(Array(gridSize * gridSize).fill(false));

  const handleClick = (index) => {
    const newTiles = [...tiles];
    flipSplashArea(newTiles, gridSize, index); // Flip the clicked tile and its neighbors
    setTiles(newTiles);
  };

  return (
    <div className="container">
      <h1>Flip Frame Game</h1>
      <Grid
        tiles={tiles}
        gridSize={gridSize}
        onTileClick={handleClick}
        imageSrc={imageSrc}
      />
    </div>
  );
}

export default App;