import {
  StyledCard,
  StyledProfileLink,
  StyledContentLink,
  StyledContentMessage,
  StyledContentImage,
  StyledRedDot,
  StyledAvatar,
  StyledNotificationBody
} from './styled';

import { convertToPeriod } from './utils';

const NotificationCard =({notifObject, setOneNotifAsRead})=> {

  const generateContentBlock =(contentConfig)=> {
    const components = {
      "link": StyledContentLink,
      "image": StyledContentImage,
      "message": StyledContentMessage
    }
    const Comp = components[contentConfig.category];
    return <Comp {...contentConfig}/>
  }

  return (
    <StyledCard
      onClick={()=> setOneNotifAsRead(notifObject.id)}
      isRead={notifObject.isRead}
    >
      <StyledAvatar
        src={notifObject.initiator.avatar}
        alt="profile picture"
      />
      <StyledNotificationBody content={notifObject.content}>
        <p
          style={{fontSize: "1.4rem", color: "var(--darkGreyishBlue)"}}
        >
          <StyledProfileLink href={notifObject.initiator.href}>
            {notifObject.initiator.name}
          </StyledProfileLink>

          {notifObject.notifMessage}

          {notifObject.content?.layout === "inline" && (
            generateContentBlock(notifObject.content)
          )}

          {notifObject.isRead === false && <StyledRedDot />} <br />
          
          <span
            style={{fontSize: "1.2rem", color: "var(--greyishBlue)"}}
          >
            {convertToPeriod(notifObject.date)} ago
          </span>

        </p>
        
        {notifObject.content?.layout === "block" && (
          generateContentBlock(notifObject.content)
        )}
      </StyledNotificationBody>
    
    </StyledCard>
  );
}

export default NotificationCard;