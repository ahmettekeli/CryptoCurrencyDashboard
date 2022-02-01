import React from "react";
import { useGlobalState } from "context/Store";
import { urls, routes } from "configs";
import {
  LoginButton,
  Logo,
  Nav,
  NavItem,
  Wrapper,
  StyledLink,
} from "./Header.styles";

function Header() {
  const { theme } = useGlobalState();
  return (
    <Wrapper theme={theme}>
      <Logo>
        <StyledLink to={routes.home}>
          <img src={urls.logo} alt="logo" />
        </StyledLink>
      </Logo>
      <Nav>
        <StyledLink to={routes.market}>
          <NavItem>Piyasalar</NavItem>
        </StyledLink>
        <StyledLink to={routes.trade}>
          <NavItem>Kolay Al/Sat</NavItem>
        </StyledLink>
        <NavItem>
          <StyledLink to={routes.login}>
            <LoginButton>GİRİŞ YAP</LoginButton>
          </StyledLink>
        </NavItem>
      </Nav>
    </Wrapper>
  );
}

export default Header;
