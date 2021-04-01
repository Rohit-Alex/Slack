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
  background-color: #dccfdd;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #d7c3da;
  border-radius: 10px;
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
    border-radius: 141px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit;
    background-color: green;
    color: white;
  }
`;
