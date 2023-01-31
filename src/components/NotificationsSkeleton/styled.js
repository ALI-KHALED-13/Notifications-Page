import styled from "styled-components";


const StyledContainer = styled.section`
  background-color: white;
  width: 100%;
  max-width: 70rem;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media only screen and (min-width: 375px) {
    padding: 1.5rem 1rem;
  }
`;


const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h1 {
    font-weight: 800;
    font-size: 2rem;
    & span {
      display: inline-block;
      font-size: inherit;
      color: white;
      padding: 0.5rem;
      background-color: var(--Blue);
      border-radius: 30%;
    }
  }
`;

const StyledNotifsList = styled.ul`

`;



export {StyledContainer, StyledHeading, StyledNotifsList}