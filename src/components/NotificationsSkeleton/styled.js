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
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    & span {
      display: inline-block;
      font-size: 1rem;
      color: white;
      padding: 0.4rem 0.8rem;
      background-color: var(--Blue);
      border-radius: 5px;
    }
  }
  
`;

const StyledMarkAllButton = styled.button`
  border: none;
  font-size: 1.2rem;
  cursor: ${({active})=> active? "pointer" : "default"};
  background-color: transparent;
  color: ${({active})=> active? "#1e2f5f" : "var(---darkGreyishBlue)"};
`;


export {StyledContainer, StyledHeading, StyledMarkAllButton}