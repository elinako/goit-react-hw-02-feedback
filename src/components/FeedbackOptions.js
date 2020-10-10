import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const FeedbackBtn = styled.button`
  background-color: transparent;
  width: 80px;
  border: solid 1px #fff;
  box-shadow: 0px 0px 7px 1px rgba(102, 121, 201, 1);
  &:not(:last-child) {
    margin-right: 14px;
  }
`;

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map((option) => (
        <FeedbackBtn key={uuidv4()} name={option} onClick={onLeaveFeedback}>
          {option}
        </FeedbackBtn>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
