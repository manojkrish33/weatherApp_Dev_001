import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ResultRow from "../Components/ResultRow";

configure({ adapter: new Adapter() });

describe("<ResultRow />", () => {
  it("checks if result row returns desired jsx row element", () => {
    const wrapper = shallow(<ResultRow label="Temperature" value="13C" />);
    expect(
      wrapper.matchesElement(
        <tr>
          <td className="col-xs-3">Temperature</td>
          <td className="col-xs-1"> </td>
          <td className="col-xs-5">13C</td>
          <td className="col-xs-3"> </td>
        </tr>
      )
    ).toEqual(true);
  });
});
