import React from 'react';
import './ResetButton.css'; // Optional: Add styles for the reset button

/**
 * A button component to reset the Lights Out game.
 *
 * @param {Object} props - The props object for the ResetButton component.
 * @param {number} gridSize - The size of the grid (e.g., 5 for a 5x5 grid).
 * @param {function} setTiles - The state setter function for the tiles array.
 * @returns {JSX.Element} The rendered ResetButton component.
 */
const ResetButton = ({ gridSize, setTiles }) => {
  /**
   * Resets the game by setting all tiles to their initial state (unflipped).
   *
   * @returns {void}
   */
  const handleReset = () => {
    setTiles(Array(gridSize * gridSize).fill(false)); // Reset all tiles to false
  };

  return (
    <button className="reset-button" onClick={handleReset}>
      Reset Game
    </button>
  );
};

export default ResetButton;