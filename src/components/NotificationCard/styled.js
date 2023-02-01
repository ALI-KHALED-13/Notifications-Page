import styled, { css } from "styled-components";


const StyledCard = styled.div`
  padding: 1.4rem;
  background-color: ${({isRead})=> isRead? "initial": "var(--veryLightGrayishBlue)" };
  border-radius: 5px;
  display: flex;
  gap: 1.5rem;
`;

const StyledAvatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const StyledNotificationBody = styled.div`
  width: 100%;
  ${({content})=> content?.layout === "block" && css`
    display: grid;
    gap: 0.5rem;
    justify-content: space-between;
    grid-template-columns: ${content.type === "image"? "4fr 1fr": ""};
  `}
`;
const StyledRedDot = styled.span`
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: var(--Red);
  margin-left: 0.4rem;
  vertical-align: middle;
`;

/*************************************************** */

const StyledProfileLink = styled.a`
  font-weight: 800;
  margin-right: 0.4rem;
  &:link, &:visited {
    color: black;
  }
  &:hover {
    color: var(--Blue);
  }
`;
const StyledContentLink = styled.a`
  font-weight: 800;
  margin-left: 0.4rem;

  &:link, &:visited {
    color: var(--darkGreyishBlue);
  }
  &:hover {
    color: var(--Blue);
    
  }
`;

const StyledContentImage = styled(StyledAvatar)`
  border-radius: 5px;
  &:hover {
    outline: 3px solid var(--lightGreyishBlue1);
  }
`;

const StyledContentMessage = styled.p`
  border: 1px solid var(--lightGreyishBlue1);
  border-radius: 5px;
  padding: 1.5rem;
  font-size: 1.3rem;
  color: var(--darkGreyishBlue);
  &:hover {
    background-color: var(--lightGreyishBlue1);
  }
`;



export {
  StyledCard,
  StyledProfileLink,
  StyledContentLink,
  StyledContentMessage,
  StyledContentImage,
  StyledRedDot,
  StyledAvatar,
  StyledNotificationBody,
}