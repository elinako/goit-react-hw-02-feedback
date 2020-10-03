import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SectionTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const Section = ({ title }) => {
  return <SectionTitle>{title}</SectionTitle>;
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
