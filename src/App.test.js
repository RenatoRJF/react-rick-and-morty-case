import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("", () => {
  test("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });
});
