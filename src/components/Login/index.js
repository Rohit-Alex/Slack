import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase";
const Login = () => {
  const handleSignIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
          alt="logo"
        />
        <h1>Sign in to SHIELD</h1>
        <Button onClick={handleSignIn}>
          <h4>Sign in with Google </h4>
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;
const LoginContainer = styled.div`
  background-color: #711e7b;
  height: 100vh;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const LoginInnerContainer = styled.div`
  /* object-fit: cover; */
  padding: 100px;
  text-align: center;
  background-color: #611f69;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba (0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  /* > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  } */
  > button {
    margin-top: 50px;
    text-transform: inherit;
    background-color: green;
    color: white;
  }
`;
