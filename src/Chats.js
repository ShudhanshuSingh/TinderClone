import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! how are you!!"
        timestamp="35 minutes ago"
        profilePic="https://media.nngroup.com/media/people/photos/Headshot7.png.600x600_q75_autocrop_crop-smart_upscale.png"
      />
      <Chat
        name="Ellen"
        message="Hey! how are you!!"
        timestamp="35 minutes ago"
        profilePic="https://www.gstatic.com/tv/thumb/persons/423/423_v9_bb.jpg"
      />
    </div>
  );
}

export default Chats;
