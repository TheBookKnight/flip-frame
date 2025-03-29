import React, { useState } from 'react';
import './index.css';

const imageSrc = 'https://upload.wikimedia.org/wikipedia/commons/2/28/JPG_Test.jpg';
const gridSize = 5; // 5x5 grid

function App() {
  const [tiles, setTiles] = useState(Array(gridSize * gridSize).fill(false));

  const handleClick = (index) => {
    const newTiles = [...tiles];
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;

    const flipTile = (i) => {
      if (i >= 0 && i < gridSize * gridSize) {
        newTiles[i] = !newTiles[i];
      }
    };

    flipTile(index);
    if (col > 0) flipTile(index - 1); // left
    if (col < gridSize - 1) flipTile(index + 1); // right
    if (row > 0) flipTile(index - gridSize); // top
    if (row < gridSize - 1) flipTile(index + gridSize); // bottom

    setTiles(newTiles);
  };

  return (
    <div className="container">
      <h1>Flip Frame Game</h1>
      <div className="grid">
        {tiles.map((flipped, index) => (
          <div
            key={index}
            className={`tile ${flipped ? 'flipped' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="tile-inner">
              <div className="tile-front"></div>
              <div
                className="tile-back"
                style={{
                  backgroundImage: `url(${imageSrc})`,
                  backgroundPosition: `${(index % gridSize) * 100 / (gridSize - 1)}% ${(Math.floor(index / gridSize)) * 100 / (gridSize - 1)}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;