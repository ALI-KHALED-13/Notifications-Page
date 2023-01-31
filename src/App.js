import { useState } from "react";
import NotificationsSkeleton from "./components/NotificationsSkeleton";


function App() {
  return (
    <div className="container">
      <NotificationsSkeleton />
      <br /> <br />
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"  rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
