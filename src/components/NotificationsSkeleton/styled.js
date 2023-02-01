import styled from "styled-components";


const StyledContainer = styled.section`
  background-color: white;
  width: 100%;
  max-width: 70rem;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 1px 1px 5px var(--lightGreyishBlue1);
  @media only screen and (min-width: 375px) {
    padding: 2rem;
    border-radius: 8px;
  }
`;


const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  
  & h1 {
    font-weight: 800;
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    & span {
      display: inline-block;
      font-size: 1.2rem;
      color: white;
      padding: 0.3rem 0.8rem;
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
  color: var(--darkGreyishBlue);
  &:hover {
    color: var(--Blue);
  }
`;

const StyledNotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;


export {
  StyledContainer,
  StyledHeading,
  StyledMarkAllButton,
  StyledNotificationsContainer
}