import ActionTypes from './actionTypes';

export function sayHello(name) {
  return {type : ActionTypes.SAY_HELLO, name : name};
}

export function sayWelcome(name) {
  return {type : ActionTypes.SAY_WELCOME, name : name};
}
