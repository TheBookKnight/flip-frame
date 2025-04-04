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
 * @param {string} [props.tileColor='#ccc'] - The tile color when not flipped. Should be in hex color format.
 * @returns {JSX.Element} The rendered Grid component.
 */
const Grid = ({ 
    gridSize = 5, 
    tile: TileComponent = Tile, 
    reset: ResetComponent = ResetButton, 
    imageSrc = defaultImage,
    tileColor = '#ccc'
  }) => {
    // Validate gridSize to ensure it's within the range 2 to 10
  const validatedGridSize = Math.min(10, Math.max(2, gridSize));

  const [tiles, setTiles] = useState(Array(validatedGridSize * validatedGridSize).fill(false)); // Manage state internally
  const [validImage, setValidImage] = useState(imageSrc); // State to store the validated image
  const [isSolved, setIsSolved] = useState(false); // State to track if the puzzle is solved
  const [finalTurns, setFinalTurns] = useState(0); // State to track if the puzzle is solved
  const turnCounterRef = useRef();

  useEffect(() => {
    // Validate the gridSize prop
    if (gridSize < 2 || gridSize > 10) {
      console.warn(`Invalid gridSize: ${gridSize}. Clamping to range 2-10.`);
    }

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

  // Monitor the `tiles` state to check if the puzzle is solved
  useEffect(() => {
    // Check if the puzzle is solved after updating the tiles
    if (tiles.every((tile) => tile)) {
      if (turnCounterRef.current) {
        setFinalTurns(turnCounterRef.current.getTurns()); // Store the final number of turns
        setIsSolved(true); // Set the puzzle as solved
      }
    } 
  }, [tiles]);

  /**
   * Handles the click event for a tile. Flips the clicked tile and its neighbors.
   *
   * @param {number} index - The index of the clicked tile.
   * @returns {void}
   */
  const handleClick = (index) => {
    if (isSolved) return; // Disable interactions if the puzzle is solved
    
    if (turnCounterRef.current) {
      turnCounterRef.current.increment(); // Increment the turn counter
    }

    setTiles((prevTiles) => {
      const newTiles = [...prevTiles];
      flipSplashArea(newTiles, validatedGridSize, index); // Flip the clicked tile and its neighbors

      return newTiles; // Update the tiles state
    });
  };

  /**
   * Resets the game by resetting the tiles and the turn counter.
   *
   * @returns {void}
   */
  const handleReset = () => {
    setTiles(Array(validatedGridSize * validatedGridSize).fill(false)); // Reset all tiles to false
    if (turnCounterRef.current) {
      turnCounterRef.current.reset(); // Reset the turn counter
    }
    setFinalTurns(0); // Reset the final turns
    setIsSolved(false); // Reset solved status
  };

  return (
    <div>
      <TurnCounter ref={turnCounterRef}/>
      <div 
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${validatedGridSize}, 60px)`, // Dynamically set the number of columns
        }}
      >
        {tiles.map((flipped, index) => (
          <TileComponent
            key={index}
            flipped={flipped}
            onClick={() => handleClick(index)} // Handle tile click
            backgroundImage={validImage} // Use the validated image
            backgroundPosition={`${(index % validatedGridSize) * 100 / (validatedGridSize - 1)}% ${(Math.floor(index / validatedGridSize)) * 100 / (validatedGridSize - 1)}%`}
            gridSize={validatedGridSize} 
            tileColor={tileColor}
          />
        ))}
      </div>
      <ResetComponent gridSize={validatedGridSize} setTiles={setTiles} turnCounterRef={turnCounterRef} /> 
      <SuccessModal
        isVisible={isSolved}
        turns={finalTurns}
        onClose={handleReset} // Reset the game when the modal is closed
      />
    </div>
  );
};

export default Grid;