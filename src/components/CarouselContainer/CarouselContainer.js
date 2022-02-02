import React from "react";
import { BackgroundDiv, StyledCarousel } from "./CarouselContainer.styles";
import carouselData from "carouselResources";

function CarouselContainer() {
  const carouselItems = carouselData.data.map((item) => {
    return (
      <StyledCarousel.Item key={item.id} interval={2000} image={item.image}>
        <BackgroundDiv image={item.image} />
        <StyledCarousel.Caption>
          {/* TODO: have slide pictures as div bg and style texts and implement appstore buttons. */}
          {/* <h3>{item.title}</h3>
          <p>{item.description}</p> */}
        </StyledCarousel.Caption>
      </StyledCarousel.Item>
    );
  });
  return (
    <StyledCarousel
      variant="light"
      controls={false}
      data-testid="carousel-container"
    >
      {carouselItems}
    </StyledCarousel>
  );
}

export default CarouselContainer;
