import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectHandler = (value) => {
    setSelectedNumber(value);
    setError(""); // Clear error when a valid number is selected
  };
  
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  margin-right: 10rem;
  .flex {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    padding-top: .5rem;
  }
  .error {
    color: #ff7676;
    padding-block: 0.8rem;
    font-weight: 500;
  }
`;

const Box = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 2px;
  border: 2px solid #000;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;