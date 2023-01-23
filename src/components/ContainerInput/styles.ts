import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  width: 100%;
  height: 50%;

  @media (min-width: 725px) {
    width: 60%;
    height: 100%;
  }
`;

export default Container;
