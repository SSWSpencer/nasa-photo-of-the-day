import React from "react";
import styled from "styled-components";

const PictureExplanation = props => {

  const Explanation = styled.p`
  margin-top: 4%;
  letter-spacing: 2px;
  `

  return (
      <Explanation>{props.explanation}</Explanation>
  );
};
export default PictureExplanation;