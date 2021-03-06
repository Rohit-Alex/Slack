import styled from "styled-components";
import React from "react";

const Message = ({ message, timeStamp, user, userImage }) => {
  console.log(message);
  console.log(timeStamp)
  return (
    <MessageContainer>
      <img src={userImage} alt="userPhoto" />

      <MessageInfo>
        <h4>
          {user} <span>{new Date(timeStamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;
const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    height: 50px;
    border-radius: 31px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: #461147;
    font-weight: 300;
    margin-left: 4px;
    font-size: 12px;
  }
`;
