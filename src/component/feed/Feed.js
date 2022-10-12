import React from "react";
import Post from "./posts/Post";
import "./feed.css";
import MessageSender from "./message/MessageSender";
import StoryReels from "./StoryReels";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReels />
      <MessageSender />
      <Post
        photoURL=""
        image=""
        username="Aatif Ali"
        timestamp="12:40 PM"
        message="This is test message"
      />
    </div>
  );
};
export default Feed;
