import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { colors } from "configs";
import { themeEnum } from "context/Store";

export const Wrapper = styled.thead`
  height: 5vh;
  width: auto;
  text-align: center;
  color: ${(props) =>
    props.theme === themeEnum.DARK ? colors.textDark : colors.textLight};
  background-color: ${(props) =>
    props.theme === themeEnum.DARK
      ? colors.currencyDark
      : colors.currencyLight};
  border: 1px solid
    ${(props) =>
      props.theme === themeEnum.DARK
        ? colors.currencyBorderDark
        : colors.currencyBorderLight};
  font-size: small;
`;

export const StyledTh = styled.th`
  padding: 0 0.5rem;
`;

export const LeftTh = styled(StyledTh)`
  text-align: left;
`;

export const RightTh = styled(StyledTh)`
  text-align: right;
  &:hover {
    svg {
      visibility: visible;
    }
  }
`;

export const StyledArrowUpwardIcon = styled(ArrowUpwardIcon)`
  visibility: hidden;
`;

export const StyledArrowDownwardIcon = styled(StyledArrowUpwardIcon)`
  transform: rotate(180deg);
`;
