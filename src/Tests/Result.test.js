import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Result from "../Components/Result";

configure({ adapter: new Adapter() });

describe("<Result />", () => {
  let props = {
    wind: {
      speed: "10"
    },
    main: 32,
    weather: [
      {
        icon: "10j.png",
        main: "Clear"
      }
    ]
  };
  let wrapper = shallow(<Result {...props} />);

  it("checks if temperature is converted to celsius", () => {
    expect(wrapper.instance().convertTemparatureToCelsius(310.15)).toEqual(
      "37 C"
    );
  });
});
