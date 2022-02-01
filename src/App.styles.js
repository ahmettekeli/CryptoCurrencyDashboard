import { colors } from "./configs";
import styled from "styled-components";
import { themeEnum, useGlobalState } from "./context/Store";

export const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${() => {
    const { theme } = useGlobalState();
    return theme === themeEnum.LIGHT ? colors.bodyLight : colors.bodyDark;
  }};
  }};
`;
