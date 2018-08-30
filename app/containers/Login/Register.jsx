import React, { Component } from 'react';
import {Hero,HeroContainer,HeroCard} from './style.js'

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      confirmPassword:'',
      contactNumber:null
    }
  }
  componentWillMount(){
  }
  render() {
    return(
        <Hero className="hero">
            <HeroContainer className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-8 mx-auto">
                        <HeroCard className="card border-none">
                            <div className="card-body">
                                <div className="mt-2 text-center">
                                    <h2>Create Your Account</h2>
                                </div>
                                <p className="mt-4 text-white lead text-center">
                                    Sign up
                                </p>
                                <div className="mt-4">
                                    <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="username" value={this.state.username} placeholder="Enter email address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="password" value={this.state.password} placeholder="Enter password" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="confirmPassword" value={this.state.confirmPassword} placeholder="Confirm password" />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" name="contactNumber" value={this.state.contactNumber} placeholder="Enter Mobile Number" />
                                        </div>
                            
                                        <button type="submit" className="btn btn-primary btn-block">Create Account</button>
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
                                    Already have an account? <a href="index.html">Login Now</a>
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


      )
  }

    onFormChange=(e)=>{
    this.setState({[e.target.name] : e.target.value})
  }
  onFormSubmit=(e)=>{
    e.preventDefault();// to stop the default behaviour otherwise redirect to page with form values 
    console.log(e,this.state);

  }

}
 
export default Register;