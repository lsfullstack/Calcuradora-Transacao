import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 50%;
  background-color: var(--blue-1);

  @media (min-width: 725px) {
    width: 40%;
    height: 100%;
  }
`;

export default Container;
