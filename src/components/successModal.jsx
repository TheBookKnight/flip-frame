import React from 'react';
import './SuccessModal.css'; // Optional: Add styles for the modal

/**
 * A modal component to display a success message when the Lights Out puzzle is solved.
 *
 * @param {Object} props - The props object for the SuccessModal component.
 * @param {boolean} props.isVisible - Whether the modal is visible.
 * @param {number} props.turns - The number of turns it took to solve the puzzle.
 * @param {string} [props.message="Congratulations!"] - The success message to display in the modal.
 * @param {function} [props.renderTurns] - Function to customize the rendering of the turns message. Can insert HTML.
 * @param {function} props.onClose - Callback to close the modal.
 * @returns {JSX.Element|null} The rendered SuccessModal component or null if not visible.
 */
const SuccessModal = ({ isVisible, turns, message = "Congratulations!", renderTurns, onClose }) => {
  if (!isVisible) return null; // Do not render the modal if it's not visible

  return (
    <div className="success-modal-overlay">
      <div className="success-modal">
        <h2>{message}</h2>
        <p>{renderTurns ? renderTurns(turns) : `You solved the puzzle in ${turns} turns!`}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;