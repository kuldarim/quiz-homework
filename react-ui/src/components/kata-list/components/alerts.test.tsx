import * as React from 'react';
import { mount } from 'enzyme';
import { Alerts } from './alerts';

describe('reducer', () => {
  it('should return empty div', () => {
    const enzymeWrapper = mount(<Alerts alerts={{}} />);
    expect(enzymeWrapper.text()).toBe('');
  });

  it('should return user alert', () => {
    const enzymeWrapper = mount(<Alerts alerts={{user: true}} />);
    expect(enzymeWrapper.childAt(0).text()).toBe('Opps! Forgot to enter user name.');
  });

  it('should return katas alert', () => {
    const enzymeWrapper = mount(<Alerts alerts={{katas: true}} />);
    expect(enzymeWrapper.childAt(0).text()).toBe('Opps! Forgot to solve one of the katas.');
  });

  it('should return tests alert', () => {
    const enzymeWrapper = mount(<Alerts alerts={{tests: true}} />);
    expect(enzymeWrapper.childAt(0).text()).toBe('Opps! Something is wrong with one of your solutions, check console.');
  });
});
