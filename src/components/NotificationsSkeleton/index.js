
import { useState } from "react";
import notifications from "../../store";

import { StyledContainer, StyledHeading, StyledMarkAllButton} from "./styled";
import NotificationCard from "../NotificationCard";

const NotificationsSkeleton =()=>{
  const [notifs, setNotifs] = useState(notifications); //consider useReducer

  const newNotifsCount = notifs.filter(notif=> !notif.isRead).length;

  const setAllNotifsAsRead =()=>{
    setNotifs(
      notifs.map(notif=> ({...notif, isRead: true}))
    )
  }
  const setOneNotifAsRead =(notifID)=> {
    setNotifs(
      notifs.map(notif=> notif.id === notifID? {...notif, isRead: true}: notif)
    )
  }
  return (
    <StyledContainer>
      <StyledHeading>
         <h1>Notifications {newNotifsCount > 0 && <span>{newNotifsCount}</span>}</h1>
         <StyledMarkAllButton
          active={!!newNotifsCount}
          onClick={setAllNotifsAsRead}
         >
            Mark all as read
          </StyledMarkAllButton>
      </StyledHeading>
      <div>
        {notifs.map(notifObject=> {
            return (
              <NotificationCard
                key={notifObject.id}
                notifObject={notifObject}
                setOneNotifAsRead={setOneNotifAsRead}
              />
            )
        })}
      </div>
    </StyledContainer>
  );
}

export default NotificationsSkeleton;