import React from 'react';
import './Tile.css'; // Reuse the same CSS file for tile styles

const Tile = ({ flipped, onClick, backgroundImage, backgroundPosition }) => {
  return (
    <div className={`tile ${flipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="tile-inner">
        <div className="tile-front"></div>
        <div
          className="tile-back"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: backgroundPosition,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Tile;