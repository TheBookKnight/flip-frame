import React, { useState } from 'react';
import './Grid.css'; // Optional: Separate styles for the grid
import { flipSplashArea } from '../utils/flipSplashArea'; // Import the flipping logic

const Grid = ({ gridSize, tile: Tile, imageSrc }) => {
  const [tiles, setTiles] = useState(Array(gridSize * gridSize).fill(false)); // Manage state internally

  const handleClick = (index) => {
    const newTiles = [...tiles];
    flipSplashArea(newTiles, gridSize, index); // Flip the clicked tile and its neighbors
    setTiles(newTiles); // Update the state
  };

  return (
    <div className="grid">
      {tiles.map((flipped, index) => (
        <Tile
          key={index}
          flipped={flipped}
          onClick={() => handleClick(index)} // Handle tile click
          backgroundImage={imageSrc}
          backgroundPosition={`${(index % gridSize) * 100 / (gridSize - 1)}% ${(Math.floor(index / gridSize)) * 100 / (gridSize - 1)}%`}
        />
      ))}
    </div>
  );
};

export default Grid;