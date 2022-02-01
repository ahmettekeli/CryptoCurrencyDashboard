import React from "react";
import { BackgroundDiv, StyledCarousel } from "./CarouselContainer.styles";
import carouselData from "carouselResources";

function CarouselContainer() {
  const carouselItems = carouselData.data.map((item) => {
    return (
      <StyledCarousel.Item key={item.id} image={item.image}>
        <BackgroundDiv image={item.image} />
        <StyledCarousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </StyledCarousel.Caption>
      </StyledCarousel.Item>
    );
  });
  return (
    <StyledCarousel variant="light" controls={false}>
      {carouselItems}
    </StyledCarousel>
  );
}

export default CarouselContainer;
