import React from 'react';
import { connect } from 'react-redux';
import { sayHello } from './actions/actionCreators';
import Header from './components/header';
import Menu from './components/Menu';

const App = (props) => {
  const clickHello = () => {
    props.dispatch(sayHello('xyz'));
  };
  return (
    <div>
      <Header/>
      <Menu/>
      <h1>{props.greeting}</h1>
      <p onClick={clickHello}>I mean, why not?</p>
    </div>
  );
};
App.propTypes = {
  greeting : React.PropTypes.string,
  dispatch : React.PropTypes.func
};

export default connect(state => {
  return {greeting : state.get('greeting')};
}, (dispatch) => {
  return {dispatch : dispatch};
})(App);
