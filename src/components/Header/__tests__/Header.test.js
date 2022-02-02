import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "../Header";

describe("Header", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header")).toBeInTheDocument();
  });

  //TODO: finish up with header tests.
  it("redirects to market page", () => {});
  it("redirects to trade page", () => {});
  it("redirects to home page", () => {});
  it("shows correct theme", () => {});
});
