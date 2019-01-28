import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import InputBox from "../Components/inputBox";

configure({ adapter: new Adapter() });

describe("<InputBox />", () => {
  let handleChange = jest.fn();

  it("checks if InputBox returns desired jsx input element", () => {
    const wrapper = shallow(
      <InputBox
        label="Latitude"
        isValid={true}
        onChanged={handleChange}
        value={123}
      />
    );
    expect(
      wrapper.matchesElement(
        <div className="col-md-6">
          <label className="col-md-5">Enter Latitude :</label>
          <input
            className="col-md-5"
            type="text"
            onChange={handleChange}
            value={123}
          />
        </div>
      )
    ).toEqual(true);
  });

  it("checks if InputBox returns desired jsx error message with input element", () => {
    const wrapper = shallow(
      <InputBox
        label="Latitude"
        isValid={false}
        onChanged={handleChange}
        value={123}
      />
    );
    expect(
      wrapper.matchesElement(
        <div className="col-md-6">
          <label className="col-md-5">Enter Latitude :</label>
          <input
            className="col-md-5"
            type="text"
            onChange={handleChange}
            value={123}
          />
          <p className="error-style">Please enter a valid Latitude</p>
        </div>
      )
    ).toEqual(true);
  });
});
