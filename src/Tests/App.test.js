import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../Components/App";
import Form from "../Components/Form";
import Result from "../Components/Result";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  let wrapper = shallow(<App />);
  let updateResponseInState = jest.fn();
  it("checks if App component is loaded properly", () => {
    expect(
      wrapper.containsAnyMatchingElements([
        <h3 className="col-md-12"> Weather Application </h3>,
        <p className="col-md-8">
          Enter Latitude(in range -90 to 90 ) and Longitude(in range -180 to 180
          ) to get the weather updates
        </p>,
        <Form updateResponse={updateResponseInState} />
      ])
    ).toEqual(true);
  });

  it("check if state is updated when the function is called", () => {
    let obj = {
      value: true
    };
    wrapper.instance().updateResponseInState(obj);
    expect(wrapper.state().value).toEqual(true);
  });

  it("check if result is loaded when output is returned", () => {
    wrapper.setState({
      showOutput: true,
      validResponse: true
    });
    expect(wrapper.containsAnyMatchingElements([<Result />])).toEqual(true);
  });

  it("check if error message is returned when service returns error", () => {
    wrapper.setState({
      showOutput: true,
      validResponse: false
    });
    expect(
      wrapper.containsAnyMatchingElements([
        <p>Sorry, Something went wrong. Please try again in sometime</p>
      ])
    ).toEqual(true);
  });
});
