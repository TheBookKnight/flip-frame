import React, { useEffect, useRef, useState } from 'react';
import './Grid.css'; 
import { flipSplashArea } from '../utils/flipSplashArea'; 
import { validateImage } from '../utils/validateImage'; // Utility to validate image URLs
import Tile from './tile';
import ResetButton from './resetButton'; 
import TurnCounter from './turnCounter'; 
import SuccessModal from './successModal';

const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/2/28/JPG_Test.jpg'; // Default image URL

/**
 * A dynamic grid component for rendering tiles and handling tile interactions.
 *
 * @param {Object} props - The props object for the Grid component.
 * @param {number} [props.gridSize=5] - The size of the grid (e.g., 5 for a 5x5 grid).
 * @param {React.Component} [props.tile=Tile] - The Tile component to render each tile.
 * @param {React.Component} [props.reset=ResetButton] - The Reset Button component to reset the Flip Frame game tiles.
 * @param {string} [props.imageSrc=defaultImage] - The background image URL for the tiles.
 * @returns {JSX.Element} The rendered Grid component.
 */
const Grid = ({ 
    gridSize = 5, 
    tile: TileComponent = Tile, 
    reset: ResetComponent = ResetButton, 
    imageSrc = defaultImage 
  }) => {
  const [tiles, setTiles] = useState(Array(gridSize * gridSize).fill(false)); // Manage state internally
  const [validImage, setValidImage] = useState(defaultImage); // State to store the validated image
  const [isSolved, setIsSolved] = useState(false); // State to track if the puzzle is solved
  const turnCounterRef = useRef();

  useEffect(() => {
    const validate = async () => {
      // Check if the imageSrc is a URL or a local file
      const isLocalFile = /\.(jpg|jpeg|png)$/i.test(imageSrc) && !/^https?:\/\//i.test(imageSrc);

      if (isLocalFile) {
        setValidImage(imageSrc); // Use the local file directly
      } else {
        const isValid = await validateImage(imageSrc); // Validate the URL
        setValidImage(isValid ? imageSrc : defaultImage); // Use the default image if validation fails
      }
    };

    validate();
  }, [imageSrc]);

  /**
   * Handles the click event for a tile. Flips the clicked tile and its neighbors.
   *
   * @param {number} index - The index of the clicked tile.
   * @returns {void}
   */
  const handleClick = (index) => {
    if (isSolved) return; // Disable interactions if the puzzle is solved

    const newTiles = [...tiles];
    flipSplashArea(newTiles, gridSize, index); // Flip the clicked tile and its neighbors
    setTiles(newTiles); // Update the state

    // Increment the turn counter
    if (turnCounterRef.current) {
      turnCounterRef.current.increment(); 

      // After incrementing, check if the puzzle is solved, which is when 
      // all tiles are flipped to reveal the image (true)
      if (newTiles.every((tile) => tile)) {
        // TODO: Temporary solution to async add a 1-second delay before marking the puzzle as solved
        setTimeout(() => {
          setIsSolved(true); // Mark the puzzle as solved
        }, 1000); // 1000ms = 1 second
      }
    }
  };

  /**
   * Resets the game by resetting the tiles and the turn counter.
   *
   * @returns {void}
   */
  const handleReset = () => {
    setTiles(Array(gridSize * gridSize).fill(false)); // Reset all tiles to false
    if (turnCounterRef.current) {
      turnCounterRef.current.reset(); // Reset the turn counter
    }
    setIsSolved(false); // Allow interactions again
  };

  return (
    <div>
      <TurnCounter ref={turnCounterRef}/>
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
            backgroundImage={validImage} // Use the validated image
            backgroundPosition={`${(index % gridSize) * 100 / (gridSize - 1)}% ${(Math.floor(index / gridSize)) * 100 / (gridSize - 1)}%`}
          />
        ))}
      </div>
      <ResetComponent gridSize={gridSize} setTiles={setTiles} turnCounterRef={turnCounterRef} /> 
      <SuccessModal
        isVisible={isSolved}
        turns={turnCounterRef.current ? turnCounterRef.current.getTurns() : 0}
        onClose={handleReset} // Reset the game when the modal is closed
      />
    </div>
  );
};

export default Grid;