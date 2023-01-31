
import { useState } from "react";
import notifications from "../../store";

import { StyledContainer, StyledHeading, StyledNotifsList} from "./styled";
import NotificationCard from "../NotificationCard";

const NotificationsSkeleton =()=>{
  const [notifs, setNotifs] = useState(notifications); //consider useReducer
  
  return (
    <StyledContainer>
      <StyledHeading>
         <h1>Notifications <span>{notifs.length}</span></h1>
         <button>Mark all as read</button>
      </StyledHeading>
      <StyledNotifsList>
        {
          notifs.map(notifObject=> <NotificationCard key={notifObject.id} notif={notifObject}/>)
        }
      </StyledNotifsList>
    </StyledContainer>
  );
}

export default NotificationsSkeleton;