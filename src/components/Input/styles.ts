import styled from "styled-components";

const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  width: 90%;
  max-width: 18.75rem;
  gap: 0.25rem;

  label {
    color: var(--grey-3);
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: solid 1px var(--grey-2);
    border-radius: 0.5rem;
  }

  .legend {
    font-size: 0.7rem;
    color: var(--grey-3);
  }
`;

export default Container;
