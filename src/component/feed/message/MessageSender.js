import { Avatar } from "@mui/material";
import "./message.css";
import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const MessageSender = () => {
  return (
    <div className="messagesender">
      <div className="messgaesender-top">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrccHHFIkFQ19xnGdkQSaMzm4i3t42UlH0jj2jrR1VRxZPknimoh54VMLYOMvn_y7uUg&usqp=CAU" />
        <form>
          <input type="text" placeholder="What's on your mind ?" />
        </form>
      </div>
      <div className="messagesender-bottom">
        <div className="messanger-options">
          <VideoCallIcon style={{ color: "red" }} fontSize="large" />
          <p>Live video</p>
        </div>
        <div className="messanger-options">
          <InsertPhotoIcon style={{ color: "lightgreen" }} fontSize="large" />
          <p>Photo/Video</p>
        </div>
        <div className="messanger-options">
          <EmojiEmotionsIcon style={{ color: "#ffb100" }} fontSize="large" />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
