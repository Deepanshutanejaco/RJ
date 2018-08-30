/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();

import styled from 'styled-components';

const LoginPage = styled.div`
    width: 100%;
    height: 100%;
   `;
export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
 constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
  }
  render() {
    return (
      <LoginPage className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </LoginPage>
    );
  }
}


const style = {
  margin: 15,
};

export default HomePage;