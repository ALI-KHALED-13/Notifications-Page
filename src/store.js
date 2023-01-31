import { v4 as uuidv4 } from 'uuid';

import Mark from "./images/avatar-mark-webber.webp";
import Angela from "./images/avatar-angela-gray.webp";
import Jacob from "./images/avatar-jacob-thompson.webp";
import Rizky from "./images/avatar-rizky-hasanuddin.webp";

import Kimberly from "./images/avatar-kimberly-smith.webp";
import Nathan from"./images/avatar-nathan-peterson.webp";
import Anna from "./images/avatar-anna-kim.webp";

const notifications = [ 
  {
    id: uuidv4(),
    date: new Date() - (1*60*1000), //1 minute agom supposing the backend api will sort them for us.
    isRead: false, 
    initiator: {
      name: "Mark Webbar",
      avatar: Mark,
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
      avatar: Angela,
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
      avatar: Jacob,
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
      avatar: Rizky,
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
      avatar: Kimberly,
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
      avatar: Nathan,
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
      avatar: Anna,
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