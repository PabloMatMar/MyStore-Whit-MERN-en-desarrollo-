import React from "react";
import { shallow } from "enzyme";
import Exclusiveness from "./Exclusiveness";

describe("Exclusiveness", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Exclusiveness />);
    expect(wrapper).toMatchSnapshot();
  });
});
