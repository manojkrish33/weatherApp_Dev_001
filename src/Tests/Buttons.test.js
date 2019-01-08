import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Buttons from '../Components/Buttons';

configure({ adapter: new Adapter() });

describe('<Buttons />' , () => {

    it('checks if buttons are returned' , () => {
        let  handleChange  = jest.fn();
        const wrapper = shallow(<Buttons name="Check!" clicked={handleChange} />);
		expect(wrapper.matchesElement(<button className="Check-Button col-md-2" onClick={handleChange}>Check!</button>)).toEqual(true);   
    });

    it('checks if button can be clicked' , () => {
        let  handleChange  = jest.fn()        
        const wrapper = shallow(<Buttons name="Check!" clicked={handleChange} />);
        wrapper.find('button').simulate('click');
		expect(handleChange).toHaveBeenCalled();
    });

});