import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="mrsono0" name="손정현" />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(<Profile username="mrsono0" name="손정현" />);
    utils.getByText("mrsono01");
    utils.getByText("(손정현)");
    // utils.getByText("mrsono0 (손정현)");
  });
});