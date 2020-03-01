import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../app.js';

describe('<App />', () => {

  it('exists at the start of the application', () => {
    let app = shallow(<App />);
    expect(app.find('form').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
