import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import CarouselContainer from "../CarouselContainer";

describe("CarouselContainer", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const tree = renderer.create(<CarouselContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<CarouselContainer />);
    expect(getByTestId("carousel-container")).toBeInTheDocument();
  });

  //TODO: finish up with carousel tests.
  it("shows related slide on bullet click", () => {});
  it("loops slides", () => {});
  it("changes slide with the correct interval", () => {});
});
