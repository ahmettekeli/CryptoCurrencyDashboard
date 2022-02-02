import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import SelectBox from "../SelectBox";

describe("SelectBox", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const tree = renderer.create(<SelectBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<SelectBox />);
    expect(getByTestId("select-box")).toBeInTheDocument();
  });

  //TODO: finish up with select box tests.
  it("shows selected option", () => {});
  it("renders correct amount of options", () => {});
});
