import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Hero,HeroContainer,HeroCard} from './style.js'
require("./login.css");
import companyLogo from '../../components/images/bg.jpg';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      
        <Hero className="hero">
            <HeroContainer className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-8 mx-auto">
                        <HeroCard className="card border-none">
                            <div className="card-body">
                                <div className="mt-2">
                                    <img src={companyLogo} alt="Male" className="brand-logo mx-auto d-block img-fluid rounded-circle"/>
                                </div>
                                <p className="mt-4 text-white lead text-center">
                                    Sign in
                                </p>
                                <div className="mt-4">
                                    <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
                                   
                                        <div className="form-group">
                                            <input type="email" className="form-control" name ="username" id="email" value={this.state.username} placeholder="Enter email address"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="password" id="password" value={this.state.password} placeholder="Enter password" onKeyPress={this.onKeyPress}/>
                                        </div>
                                        {false ? <label className="custom-control custom-checkbox mt-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description text-white">Keep me logged in</span>
                                        </label>:null}
                                        <button type="submit" className="btn btn-primary float-right">Sign in</button>
                                    </form>
                                    <div className="clearfix"></div>
                                    <p className="content-divider center mt-4"><span>or</span></p>
                                </div>
                                <p className="mt-4 social-login text-center">
                                    <a href="#" className="btn btn-twitter"><em className="ion-social-twitter"></em></a>
                                    <a href="#" className="btn btn-facebook"><em className="ion-social-facebook"></em></a>
                                    <a href="#" className="btn btn-linkedin"><em className="ion-social-linkedin"></em></a>
                                    <a href="#" className="btn btn-google"><em className="ion-social-googleplus"></em></a>
                                    <a href="#" className="btn btn-github"><em className="ion-social-github"></em></a>
                                </p>
                                <p className="text-center">
                                    Don't have an account yet? <a href="register.html">Sign Up Now</a>
                                </p>
                            </div>
                        </HeroCard>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-sm-12 mt-5 footer">
                        <p className="text-white small text-center">
                            &copy; 2018 
                            <a href="#">Deep</a>. Designed by <a href="#">@Deep</a>
                        </p>
                    </div>
                </div>
            </HeroContainer>
        </Hero>

    );
  }
  onFormChange=(e)=>{
    this.setState({[e.target.name] : e.target.value})
  }
  onFormSubmit=(e)=>{
    e.preventDefault();// to stop the default behaviour otherwise redirect to page with form values 
    console.log(e,this.state);

  }
}
export default Login;