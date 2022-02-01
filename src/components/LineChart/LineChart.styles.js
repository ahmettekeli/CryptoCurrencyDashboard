import styled from "styled-components";

export const lineChartSize = Object.freeze({
  SMALL: "small",
  LARGE: "large",
});

export const Wrapper = styled.div`
  padding: 0.5rem 0;
  width: ${(props) => (props.size === lineChartSize.SMALL ? "10vw" : "50vw")};
  height: ${(props) => (props.size === lineChartSize.SMALL ? "6vh" : "20vh")};
`;
