import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 40rem;
  background-color: var(--white);
  border: solid 2px var(--blue-2);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 725px) {
    max-height: 30rem;
    flex-direction: row;
  }
`;

export default Container;
