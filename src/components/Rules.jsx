import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play Dice Game</h2>
      <div className="text">
        <p>1. Select any number</p>
        <p>2. Click on dice image</p>
        <p>
          3. After click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>4. If you get wrong then 2 point will be deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 500px;
  background-color: #ffefef;
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-radius: 2px;
  position: absolute;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .2);
  left: 3%;
  top: 30%;
  h2 {
    font-size: 1.5rem;
  }
  p{
    padding-block: .3rem;
    margin-block: .5rem;
    border-bottom: 2px solid #0000001e;
    font-size: 1.1rem;
  }
  .text {
    margin-top: 1.5rem;
  }
`;
