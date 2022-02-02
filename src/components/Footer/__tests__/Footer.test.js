import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Footer from "../Footer";

describe("Footer", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer")).toBeInTheDocument();
  });

  //TODO: finish up with footer tests.
  it("redirects to support page", () => {});
  it("redirects to help page", () => {});
  it("redirects to youtube", () => {});
  it("redirects to facebook", () => {});
  it("redirects to twitter", () => {});
  it("redirects to linkedin", () => {});
  it("redirects to instagram", () => {});
  it("redirects to blog", () => {});
  it("changes theme", () => {});
  it("shows correct theme", () => {});
});
