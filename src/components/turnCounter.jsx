import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './TurnCounter.css'; // Optional: Add styles for the turn counter

/**
 * A component to display and manage the turn counter for the Lights Out game.
 *
 * @param {Object} props - The props object for the TurnCounter component.
 * @param {function} props.onIncrement - Callback to notify when the counter increments.
 * @returns {JSX.Element} The rendered TurnCounter component.
 */
const TurnCounter = forwardRef((props, ref) => {
  const [turns, setTurns] = useState(0);

  /**
   * Increments the turn counter by 1.
   *
   * @returns {void}
   */
  const incrementTurns = () => {
    setTurns((prevTurns) => prevTurns + 1);
  };

  /**
   * Resets the turn counter to 0.
   *
   * @returns {void}
   */
  const resetTurns = () => {
    setTurns(0);
  };

  /**
   * Retrieves the current turn count.
   *
   * @returns {number} The current turn count.
   */
  const getTurns = () => turns;

  // Expose methods to parent components via ref
  useImperativeHandle(ref, () => ({
    increment: incrementTurns,
    reset: resetTurns,
    getTurns
  }));

  return (
    <div className="turn-counter">
      <p>Turns: {turns}</p>
    </div>
  );
});

export default TurnCounter;