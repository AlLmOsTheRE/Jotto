import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for congratulatory message.
 * @function
 * @returns {JSX.Element} Rendered component (or null if 'sucess' prop is false)
 */
export default function Congrats({ success }) {
  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  }
  return <div data-test="component-congrats" />;
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
