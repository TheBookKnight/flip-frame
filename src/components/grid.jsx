import React from 'react';
import './Grid.css'; // Optional: Separate styles for the grid

const Grid = ({ tiles, gridSize, tile : Tile, onTileClick, imageSrc }) => {
    return (
        <div className="grid">
            {tiles.map((flipped, index) => (
                <Tile
                    key={index}
                    flipped={flipped}
                    onClick={() => onTileClick(index)}
                    backgroundImage={imageSrc}
                    backgroundPosition={`${(index % gridSize) * 100 / (gridSize - 1)}% ${(Math.floor(index / gridSize)) * 100 / (gridSize - 1)}%`}
                />
            ))}
        </div>
    );
};

export default Grid;