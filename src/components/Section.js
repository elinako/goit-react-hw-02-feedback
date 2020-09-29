import React from "react";
import styled from "styled-components";

const SectionTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const Section = ({ title }) => {
  return <SectionTitle>{title}</SectionTitle>;
};

export default Section;
