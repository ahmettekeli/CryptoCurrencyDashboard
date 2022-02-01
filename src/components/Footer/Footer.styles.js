import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "configs";
import { themeEnum } from "context/Store";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.footer`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  padding: 0 4rem;
  color: ${colors.textDark};
  background-color: ${(props) =>
    props.theme === themeEnum.DARK ? colors.footerDark : colors.footerLight};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33vw;
`;

export const ContainerRight = styled(Container)`
  justify-content: flex-end;
`;

export const ContainerLeft = styled(Container)`
  justify-content: flex-start;
`;

export const IconButtonContainer = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: ${colors.footerLight};
  background-color: ${colors.bodyLight};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
  width: auto;
  border-radius: 3px;
  margin: 0 0.3rem;
  padding: 0.2rem;
  border: 1px solid ${colors.bodyLight};
  color: ${colors.bodyLight};
`;

export const StyledIconButton = styled(IconButton)`
  color: ${colors.footerLight} !important;
`;

export const Content = styled.div`
  margin: 0 1rem;
  font-size: small;
  img {
    height: 5.5vh;
    width: auto;
  }
`;

export const BlogIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  width: auto;
  img {
    margin: 0 0.1rem;
    height: 1rem;
    width: auto;
  }
`;

export const LogoContainer = styled.div`
  img {
    border-radius: 5px;
    height: 2.3rem;
    width: auto;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.bodyLight};
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${colors.bodyLight};
  }
`;
