import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.5rem;
  border: 2px solid #cdcdcd;
  background-color: #1858a7;
  color: #fafafa;
  font-size: 36px;
  font-weight: 700;
  flex: ${(props) => (props.double ? 2 : 1)};
  animation: all 0.5s ease;
  //aspect-ratio: 1/1;

  &:hover {
    opacity: 0.6;
  }
`;
