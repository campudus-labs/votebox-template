import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import { expect } from 'chai';

describe('App component', () => {


  it('greets with Hello', () => {
    const store = configureStore();
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Provider store={store}><App/></Provider>);
    const result = renderer.getRenderOutput();
    expect(result.type).to.equal('div');
    expect(result.props.children[1].props.children).to.equal('Hello.');
  });

});
