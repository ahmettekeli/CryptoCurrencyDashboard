import styled from "styled-components";
import { colors } from "configs";
import { themeEnum } from "context/Store";
import { StyledLink } from "components/Footer/Footer.styles";
export { StyledLink };

export const Wrapper = styled.header`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8.5vh;
  width: 100vw;
  padding: 0 4rem;
  color: ${colors.bodyLight};
  background-color: ${(props) =>
    props.theme === themeEnum.DARK ? colors.headerDark : colors.headerLight};
`;

export const Logo = styled.div`
  margin: 0.75rem;
  img {
    height: 1.85rem;
    width: auto;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const NavItem = styled.div`
  margin: 0 1.2rem;
`;

export const LoginButton = styled.div`
  border: 1px solid ${colors.bodyLight};
  border-radius: 5px;
  padding: 0.25rem 1rem;
`;
