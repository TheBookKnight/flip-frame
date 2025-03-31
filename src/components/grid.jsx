import React, { useState } from 'react';
import './Grid.css'; 
import { flipSplashArea } from '../utils/flipSplashArea'; 
import Tile from './tile';

const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/2/28/JPG_Test.jpg'; // Default image URL

/**
 * A dynamic grid component for rendering tiles and handling tile interactions.
 *
 * @param {Object} props - The props object for the Grid component.
 * @param {number} [props.gridSize=5] - The size of the grid (e.g., 5 for a 5x5 grid).
 * @param {React.Component} [props.tile=Tile] - The Tile component to render each tile.
 * @param {string} [props.imageSrc=defaultImage] - The background image URL for the tiles.
 * @returns {JSX.Element} The rendered Grid component.
 */
const Grid = ({ gridSize = 5, tile: TileComponent = Tile, imageSrc = defaultImage }) => {
  const [tiles, setTiles] = useState(Array(gridSize * gridSize).fill(false)); // Manage state internally

  /**
   * Handles the click event for a tile. Flips the clicked tile and its neighbors.
   *
   * @param {number} index - The index of the clicked tile.
   * @returns {void}
   */
  const handleClick = (index) => {
    const newTiles = [...tiles];
    flipSplashArea(newTiles, gridSize, index); // Flip the clicked tile and its neighbors
    setTiles(newTiles); // Update the state
  };

  return (
    <div 
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 60px)`, // Dynamically set the number of columns
      }}
    >
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