import App from "../App";
import { screen, render } from "@testing-library/react-native";
// import { render } from "./test-utils";

describe('<App/>', () => {
  it(`App renders correctly`, () => {
    render(<App />);
    expect(screen.root.children.length).toBe(3)
  });
})
