import React from 'react';
import './SuccessModal.css'; // Optional: Add styles for the modal

/**
 * A modal component to display a success message when the Lights Out puzzle is solved.
 *
 * @param {Object} props - The props object for the SuccessModal component.
 * @param {boolean} props.isVisible - Whether the modal is visible.
 * @param {number} props.turns - The number of turns it took to solve the puzzle.
 * @param {function} props.onClose - Callback to close the modal.
 * @returns {JSX.Element|null} The rendered SuccessModal component or null if not visible.
 */
const SuccessModal = ({ isVisible, turns, onClose }) => {
  if (!isVisible) return null; // Do not render the modal if it's not visible

  return (
    <div className="success-modal-overlay">
      <div className="success-modal">
        <h2>Congratulations!</h2>
        <p>You solved the puzzle in {turns} turns!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;