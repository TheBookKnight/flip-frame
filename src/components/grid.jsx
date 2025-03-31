import React from 'react';
import './Grid.css'; // Optional: Separate styles for the grid

const Grid = ({ tiles, gridSize, onTileClick, imageSrc }) => {
    return (
        <div className="grid">
            {tiles.map((flipped, index) => (
                <div
                    key={index}
                    className={`tile ${flipped ? 'flipped' : ''}`}
                    onClick={() => onTileClick(index)}
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
    );
};

export default Grid;