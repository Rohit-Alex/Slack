import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <input type="text" placeholder="search" />
        <SearchIcon />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
// css part below
const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  background-color: var(--slack-color);
`;
const HeaderLeft = styled.div`
  /* flex: 0.3; */
  width: 30%;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 0;
  }
  /* justify-content: space-between; */
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 8px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding-left: 20px;

  border: 2px solid gray;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    color: white;
    outline: 0;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > MuiSvgIcon-root {
    /* margin-left: auto; */
    margin-right: 5px;
  }
`;
