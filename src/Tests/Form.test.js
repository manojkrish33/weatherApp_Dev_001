import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Form from "../Components/Form";
import InputBox from "../Components/inputBox";
import Button from "../Components/Button";
import fetch_positive from "../__mocks__/fetchPositive";
import fetch_negative from "../__mocks__/fetchNegative";

configure({ adapter: new Adapter() });

describe("<Form />", () => {
  it("checks input boxes are loaded properly", () => {
    let updateResponse = jest.fn();
    let wrapper = shallow(<Form updateResponse={updateResponse} />);
    expect(wrapper.find(InputBox)).toHaveLength(2);
  });

  it("checks buttons are loaded properly", () => {
    let updateResponse = jest.fn();
    let wrapper = shallow(<Form updateResponse={updateResponse} />);
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it("checks updateResponse is called in getWeather call", () => {
    let updateResponse = jest.fn();
    let wrapper = shallow(<Form updateResponse={updateResponse} />);
    wrapper.setState({
      lat: 23,
      long: 123,
      temp: "",
      showOutput: false,
      validLat: true,
      validLong: true
    });
    global.fetch = fetch_positive;
    wrapper.instance().getWeather();
    setTimeout(() => {
      expect(wrapper.props().updateResponse).toHaveBeenCalled();
    }, 1000);
  });

  it("chcek if clearAll function is working as expected", () => {
    let updateResponse = jest.fn();
    let wrapper = shallow(<Form updateResponse={updateResponse} />);
    wrapper.setState({
      lat: "32"
    });
    wrapper.instance().clearAll();
    expect(wrapper.state().lat).toEqual("");
  });

  it("chcek if longitude gets updated in state on change", () => {
    let updateResponse = jest.fn();
    let wrapper = shallow(<Form updateResponse={updateResponse} />);
    wrapper.instance().longitudeOnChange({ target: { value: "132" } });
    expect(wrapper.state().long).toEqual("132");
  });

  it("chcek if longitude validations is working properly on change", () => {
    let updateResponse = jest.fn();
    let wrapper = shallow(<Form updateResponse={updateResponse} />);
    wrapper.instance().longitudeOnChange({ target: { value: "256" } });
    expect(wrapper.state().validLong).toEqual(false);
  });

  it("chcek if latitude gets updated in state on change", () => {
    let updateResponse = jest.fn();
    let wrapper = shallow(<Form updateResponse={updateResponse} />);
    wrapper.instance().latitudeOnChange({ target: { value: "85" } });
    expect(wrapper.state().lat).toEqual("85");
  });

  it("chcek if latitude validations is working properly on change", () => {
    let updateResponse = jest.fn();
    let wrapper = shallow(<Form updateResponse={updateResponse} />);
    wrapper.instance().latitudeOnChange({ target: { value: "256" } });
    expect(wrapper.state().validLat).toEqual(false);
  });

  it("chcek if error response is handled if api returns error", () => {
    let updateResponse = jest.fn();
    let wrapper = shallow(<Form updateResponse={updateResponse} />);
    wrapper.setState({
      lat: 23,
      long: 123,
      temp: "",
      showOutput: false,
      validLat: true,
      validLong: true
    });
    global.fetch = fetch_negative;
    wrapper.instance().getWeather();
    setTimeout(() => {
      expect(wrapper.state().showOutput).toEqual(true);
    }, 1000);
  });

  it("checks if api call happens only if latitiude and longitude are valid", () => {
    let updateResponse = jest.fn();
    let wrapper = shallow(<Form updateResponse={updateResponse} />);
    wrapper.setState({
      lat: 23,
      long: 123,
      temp: "",
      showOutput: false,
      validLat: false,
      validLong: false
    });
    global.fetch = fetch_positive;
    wrapper.instance().getWeather();
    setTimeout(() => {
      expect(wrapper.props().showOutput).toEqual(false);
    }, 1000);
  });
});
