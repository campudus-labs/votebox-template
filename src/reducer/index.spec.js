import { expect } from 'chai';
import reducer from './index';

describe('The greeting reducer', () => {

  it('is blank in the beginning', () => {
    expect(reducer(undefined, {type : 'INIT'}).toJS()).to.deep.equals({
      'greeting' : '...'
    });
  });

  it('can be set to hello', () => {
    expect(reducer(undefined, {type : 'SAY_HELLO', name : 'alice'}).toJS()).to.deep.equals({
      'greeting' : 'Hello alice'
    });
  });

  it('can be set to welcome', () => {
    expect(reducer(undefined, {type : 'SAY_WELCOME', name : 'alice'}).toJS()).to.deep.equals({
      'greeting' : 'Welcome alice'
    });
  });

});
