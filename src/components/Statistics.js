import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{positivePercentage} %</p>
    </>
  );
};

export default Statistics;

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positiveFeedback: 0,
};

Statistics.propTypes = {
  positivePercentage: PropTypes.number.isRequired,
};
