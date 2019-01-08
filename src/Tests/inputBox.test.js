import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputBox from '../Components/inputBox';

configure({ adapter: new Adapter() });

describe('<InputBox />' , () => {

    it('checks if input boxes are avaialbale' , () => {
        let  handleChange  = jest.fn();
        const wrapper = shallow(<InputBox name='Latitude' onChanged={handleChange} value={13}/>);
		expect(wrapper.matchesElement(<div className="col-md-6">
        <label className="col-md-5">Enter Latitude :  </label>
        <input className="col-md-5" type="text" onChange={handleChange} value={13} />
</div>)).toEqual(true);
        
    });
});