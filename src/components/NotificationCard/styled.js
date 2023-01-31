import styled from "styled-components";


const StyledCard = styled.div`
  margin-bottom: 1rem;
  background-color: ${({isRead})=> isRead? "initial": "var(--lightGreyishBlue1)" };
  border-radius: 5px;
  display: flex;
  gap: 0.5rem;

`;

const StyledAvatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:link, &:visited {
    color: unset;
  }
  &:hover, &:active {
    color: var(--Blue);
  }
  margin: 0 0.2rem;
`;

const StyledProfileLink = styled(StyledLink)`
  font-weight: 800;
`;
const StyledContentLink = styled(StyledLink)`
  font-weight: 500;
  color: var(--greyishBlue);
`;

const StyledEmbeddedMessage = styled.p`

`;

const StyledRedDot = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--Red);
  margin-left: 0.3rem;
`;

export {
  StyledCard,
  StyledProfileLink,
  StyledContentLink,
  StyledEmbeddedMessage,
  StyledRedDot,
  StyledAvatar
}