import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import SelectItem from "../SelectItem";

describe("SelectItem", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const tree = renderer.create(<SelectItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<SelectItem />);
    expect(getByTestId("select-item")).toBeInTheDocument();
  });

  //TODO finish up with select item tests.
});
