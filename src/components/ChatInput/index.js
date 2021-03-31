import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import firebase from "firebase";
import photo from "../../photo.jpg";
const ChatInput = ({ channelName, channelId }) => {
  const [inputMsg, setInputMsg] = useState("");
  console.log(channelId);
  const sendMessage = (e) => {
    e.preventDefault();
    setInputMsg("");
    console.log("hello");
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: inputMsg,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Rohit",
      userImage: photo,
    });
  };
  const handleChange = (e) => {
    setInputMsg(e.target.value);
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          placeholder={`Message ${channelId}`}
          value={inputMsg}
          onChange={handleChange}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 20px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    position: fixed;
    bottom: 40px;
    right: 50px;
    /* display: none; */
  }
`;
