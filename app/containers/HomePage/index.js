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

import Loginscreen from '../Login/Loginscreen'
import styled from 'styled-components';

const LoginPage = styled.div`
    width: 50%;
    height: 100%;
    border: 1px;
    margin-top: 5%;
    padding: 0px;
    position: absolute;
    right: 25%;
    border-style:solid;
    border-color:darkgrey;
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
    loginPage.push(<Loginscreen key="screen"parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
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