import React from 'react';
import './Tile.css'; // Reuse the same CSS file for tile styles

/**
 * A single tile component that supports flipping and displays a background image.
 *
 * @param {Object} props - The props object for the Tile component.
 * @param {boolean} props.flipped - Whether the tile is flipped or not.
 * @param {function} props.onClick - The function to call when the tile is clicked.
 * @param {string} props.backgroundImage - The URL of the background image for the tile.
 * @param {string} props.backgroundPosition - The position of the background image for the tile.
 * @param {number} props.gridSize - The size of the grid it'll used on (e.g., 5 for a 5x5 grid).
 * @returns {JSX.Element} The rendered Tile component.
 */
const Tile = ({ flipped, onClick, backgroundImage, backgroundPosition, gridSize }) => {
  return (
    <div className={`tile ${flipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="tile-inner">
        <div className="tile-front"></div>
        <div
          className="tile-back"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: backgroundPosition,
            backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Tile;