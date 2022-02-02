import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import DetailContainer from "../DetailContainer";

describe("DetailContainer", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const tree = renderer.create(<DetailContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<DetailContainer />);
    expect(getByTestId("detail-container")).toBeInTheDocument();
  });

  //TODO: finish up with detail container tests.
  it("renders correct amount of currencies in select", () => {});
  it("renders correct price on currency select", () => {});
  it("renders correct change percent on currency select", () => {});
  it("shows correct theme", () => {});
});
