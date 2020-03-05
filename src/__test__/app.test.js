/* eslint-disable no-unused-vars */
import React from 'react';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), });

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../app.js';
import Form from '../components/form/form.js';

describe('<App />', () => {

  it('exists at the start of the application', () => {
    let app = shallow(<App />);
    expect(app.find('div').exists()).toBeTruthy();
  });

  // it('renders correctly', () => {
  //   const tree = renderer.create(<App />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('can render Form',()=>{
    let app = mount(<Form/>);
    let form = app.find('form');
    expect(form.exists()).toBeTruthy();
  });

  it('can render to the DOM',()=>{
    const rendered = renderer.create(<Form />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

});
