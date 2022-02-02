import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

export const StyledCarousel = styled(Carousel)`
  .carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    margin: 0 10px;
  }
`;

export const BackgroundDiv = styled.div`
  width: 100vw;
  height: 50vh;
  background-size: cover;
  background-image: url(${(props) => props.image});
`;
