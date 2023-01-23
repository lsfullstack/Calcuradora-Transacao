import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue-1);
  color: var(--blue-3);

  .title-inputs {
    font-size: 2rem;
    color: var(--grey-4);
  }

  .title-results {
    font-size: 1.5rem;
    border-bottom: solid 1px var(--blue-3);
  }

  .results {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1.25rem;

    span {
      display: flex;
      gap: 1rem;
      color: var(--blue-3);

      p {
        color: var(--blue-4);
      }

      svg {
        font-size: 1rem;
        animation: svg infinite 500ms linear;
      }
    }
  }

  @keyframes svg {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Container;
