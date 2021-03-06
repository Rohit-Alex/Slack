import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Spinner from "react-spinkit";
function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <Contents>
          <img
            src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
            alt="logo"
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </Contents>
      </AppLoading>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          {!user ? (
            <Login />
          ) : (
            <>
              <Header />
              <AppBody>
                <Sidebar />
                <Switch>
                  <Route exact path="/">
                    <Chat />
                  </Route>
                </Switch>
              </AppBody>
            </>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

//css part
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
const AppLoading = styled.div`
  background-color: #dccfdd;
  height: 100vh;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const Contents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    padding: 20px;
    height: 200px;
    margin-bottom: 20px;
    border-radius: 141px;
  }
`;
