import { v4 as uuidv4 } from 'uuid';

const notifications = [ 
  {
    id: uuidv4(),
    date: new Date() - (1*60*1000), //1 minute agom supposing the backend api will sort them for us.
    isRead: false, 
    initiator: {
      name: "Mark Webbar",
      href: "#"
    },
    notifMessage: "reacted to your recent post",
    content: {
      type: "link",
      text: "My first tournament today!",
      href: "#"
    }
  },
  {
    id: uuidv4(),
    date: new Date() - (5*60*1000),
    isRead: false,
    initiator: {
      name: "Angela Gray",
      href: "#"
    },
    notifMessage: "followed you",
  },
  {
    id: uuidv4(),
    date: new Date() - (24*60*60*1000),
    isRead: false,
    initiator: {
      name: "Jacob Thompson",
      href: "#"
    },
    notifMessage: "has joined your group",
    content: {
      type: "link",
      text: "Chess Club",
      href: "#"
    }
  },
  {
    id: uuidv4(),
    date: new Date() - (5*24*60*60*1000),
    isRead: true,
    initiator: {
      name: "Rizky Hasanuddin",
      href: "#"
    },
    notifMessage: "sent you a private message",
    content: {
      type: "message",
      text: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      href: "#"
    }
  },
  {
    id: uuidv4(),
    date: new Date() - (7*24*60*60*1000),
    isRead: true,
    initiator: {
      name: "Kimberly Smith",
      href: "#"
    },
    notifMessage: "commented on your picture",
    content: {
      type: "image",
      text: "",
      href: "./assets/image-chess.webp"
    }
  },
  {
    id: uuidv4(),
    date: new Date() - (14*24*60*60*1000),
    isRead: true,
    initiator: {
      name: "Nathan Peterson",
      href: "#"
    },
    notifMessage: "reacted to your recent post",
    content: {
      type: "link",
      text: "5 end-game strategies to increase your win rate",
      href: "#"
    }
  },
  {
    id: uuidv4(),
    date: new Date() - (14*24*60*60*1000),
    isRead: true,
    initiator: {
      name: "Anna Kim",
      href: "#"
    },
    notifMessage: "left the group",
    content: {
      type: "link",
      text: "Chess Club",
      href: "#"
    }
  }
];

export default notifications;