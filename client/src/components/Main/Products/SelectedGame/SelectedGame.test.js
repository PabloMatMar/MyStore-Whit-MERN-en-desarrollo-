import React from "react";
import { shallow } from "enzyme";
import SelectedGame from "./SelectedGame";

describe("SelectedGame", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SelectedGame />);
    expect(wrapper).toMatchSnapshot();
  });
});
