import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src="/images/dices.png" alt="" />
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Game</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1280px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 4fr 5fr;
  align-items: center;
  height: 100vh;
  gap: 5rem;

  .content h1 {
    font-size: 6rem;
    font-weight: 900;
    white-space: nowrap;
    margin: -4rem 0 2rem 0;
  }
`;