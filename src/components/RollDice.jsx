import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img
          src={`/images/dice/dice_${currentDice}.png`}
          alt={`dice ${currentDice}`}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;

  .dice {
    cursor: pointer;
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
