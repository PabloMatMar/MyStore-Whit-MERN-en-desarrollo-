import React from "react";
import { shallow } from "enzyme";
import SameDevelopers from "./SameDevelopers";

describe("SameDevelopers", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SameDevelopers />);
    expect(wrapper).toMatchSnapshot();
  });
});
