import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  margin-left: 5rem;
  max-width: 250px;
  padding: 2rem;
  text-align: center;
  h1 {
    font-size: 4.5rem;
    /* line-height: 1; */
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
  }
`;
