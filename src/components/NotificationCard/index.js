import {
  StyledCard,
  StyledProfileLink,
  StyledContentLink,
  StyledEmbeddedMessage,
  StyledRedDot,
  StyledAvatar
} from './styled';


const NotificationCard =({notifObject, setOneNotifAsRead})=> {

const contentType = notifObject.content?.type;

return (
  <StyledCard onClick={setOneNotifAsRead} isRead={notifObject.isRead}>
    <StyledAvatar
      src={notifObject.initiator.avatar}
      alt="profile picture"
    />
    <div>
      <p>
        <StyledProfileLink href={notifObject.initiator.href}>
          {notifObject.initiator.name}
        </StyledProfileLink>
        {notifObject.notifMessage}

        {contentType === "link" && (
          <StyledContentLink href={notifObject.content.href}>
            {notifObject.content.text}
          </StyledContentLink>
        )}
        {notifObject.isRead === false && <StyledRedDot />}
      </p>
      <span>
        {new Date(notifObject.date).toDateString()}
      </span>
      {/*["image", "message"].includes(contentType) && (
        contentType === "message"?
        
        :

      )*/}
    </div>
  </StyledCard>
);
}

export default NotificationCard;