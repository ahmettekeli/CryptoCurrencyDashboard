import styled from "styled-components";
import { colors } from "configs";
import { themeEnum } from "context/Store";
import { StyledLink } from "components/Footer/Footer.styles";

export { StyledLink };

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  color: ${(props) =>
    props.theme === themeEnum.DARK ? colors.textDark : colors.textLight};
  background-color: ${(props) =>
    props.theme === themeEnum.DARK
      ? colors.currencyFooterDark
      : colors.currencyFooterLight};
  font-size: small;
  &:hover {
    background-color: ${(props) =>
      props.theme === themeEnum.DARK
        ? colors.currencyFooterHoverDark
        : colors.currencyFooterHoverLight};
  }
`;
