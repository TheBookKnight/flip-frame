import React, { useState } from 'react';
import './Grid.css'; // Optional: Separate styles for the grid
import { flipSplashArea } from '../utils/flipSplashArea'; // Import the flipping logic
import Tile from './tile';

const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/2/28/JPG_Test.jpg'; // Default image URL

// Function to create a grid of tiles
// The grid is a square of size gridSize x gridSize
const Grid = ({ gridSize = 5, tile: TileComponent = Tile, imageSrc = defaultImage }) => {
  const [tiles, setTiles] = useState(Array(gridSize * gridSize).fill(false)); // Manage state internally

  const handleClick = (index) => {
    const newTiles = [...tiles];
    flipSplashArea(newTiles, gridSize, index); // Flip the clicked tile and its neighbors
    setTiles(newTiles); // Update the state
  };

  return (
    <div className="grid">
      {tiles.map((flipped, index) => (
        <TileComponent
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