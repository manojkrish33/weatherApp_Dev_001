import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputBox from '../Components/inputBox';

configure({ adapter: new Adapter() });

describe('<App />' , () => {

  let wrapper;
  beforeEach(() => {wrapper = shallow(<App />);});

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('checks if input boxes are avaialbale to enter data' , () => {
    expect(wrapper.find(InputBox)).toHaveLength(2);
  });

  it('chcek if latitude change function is working as expected', () => {
    wrapper.instance().latitudeChange({target : { value : "14"}});
    expect(wrapper.state().lat).toEqual("14");
  });

  it('chcek if longitude change function is working as expected', () => {
    wrapper.instance().longitudeChange({target : { value : "132"}});
    expect(wrapper.state().long).toEqual("132");
  });
  
});
