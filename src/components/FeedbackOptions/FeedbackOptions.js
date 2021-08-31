import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className="feedback-options">
        {options.map( option => (
          <button
            type="button"
            className="feedback-option-btn"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >{option}</button>
        ))}
    </div>
);

FeedbackOptions.protoTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
