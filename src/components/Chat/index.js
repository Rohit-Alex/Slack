import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "../ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Message from "../Message";
import bkg from "../../movie1.jpg";
const Chat = () => {
  const href = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  // console.log(roomDetails?.data());
  console.log(roomMessages);
  useEffect(() => {
    href.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);
  return (
    <ChatContainer>
      <ImageContainer>
        <img src={bkg} alt="chatBackground" />
        {/* {roomDetails && roomMessages && ( */}
        <>
          <Header>
            <HeaderLeft>
              <h2>
                <strong>#{roomDetails?.data().name}</strong>
              </h2>
              <StarBorderOutlinedIcon />
            </HeaderLeft>
            <HeaderRight>
              <h2>
                <InfoOutlinedIcon />
                Details
              </h2>
            </HeaderRight>
          </Header>

          <ChatMessage>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timeStamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
          </ChatMessage>
          <ChatBotton ref={href} />
          <ChatInput
            href={href}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
        {/* )} */}
      </ImageContainer>
    </ChatContainer>
  );
};

export default Chat;
const ChatContainer = styled.div`
  flex: 0.6;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
  padding-left: 5px;
  z-index: 1;
`;
const ImageContainer = styled.div`
  > img {
    opacity: 0.8;
    width: 100%;
    height: 100%;
    position: fixed;

    overflow-y: hidden;
    z-index: -1;
  }
`;
const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgreen;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h2 {
    display: flex;
    text-transform: lowercase;
  }
  > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > h2 {
    display: flex;
    align-items: center;
    /* font-size: 16px; */
  }
  > h2 > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
const ChatMessage = styled.div`
   {
  }
`;
const ChatBotton = styled.div`
  padding-bottom: 200px;
`;
