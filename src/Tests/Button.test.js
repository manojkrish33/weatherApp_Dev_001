import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../Components/Button";

configure({ adapter: new Adapter() });

describe("<Button />", () => {
  let handleClickMockFunction = jest.fn();
  const wrapper = shallow(
    <Button value="Check!" handleClick={handleClickMockFunction} />
  );
  it("checks if button is returned", () => {
    expect(
      wrapper.matchesElement(
        <button
          className="Check-Button col-md-2"
          onClick={handleClickMockFunction}
        >
          Check!
        </button>
      )
    ).toEqual(true);
  });
});
