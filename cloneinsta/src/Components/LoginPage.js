import React, { Component } from 'react';
import './LoginPage.css'
import Grid from '@mui/material/Grid';
import insta_img from '../images/9364675fb26a.svg'
import insta_logo from '../images/logoinsta.png'
import fblogo from '../images/fb.png'
import playstore from '../images/play.png'
import appstore from '../images/app.png'
import { Button } from '@mui/material';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state={ 
            isLogin:true
        }
    }

    changeLogin=()=>
    {
        if(this.state.isLogin)
            this.setState({isLogin:false});
        else
            this.setState({isLogin:true});
    }
    
    render() { 
        return ( 
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className='loginpage_main'>
                            <div>
                                <img src={insta_img} width="454px"/>
                            </div>
                                
                            <div>
                                <div className='loginpage_right'>
                                    <img className='loginpage_logo' src={insta_logo}/>
                                    <div className='loginpage_signin'>
                                        {
                                            this.state.isLogin ? <Signin/>:<Signup/>
                                        }
                                        <div className='loginpage_ordiv'>
                                            <div className='divider'></div>
                                            <div className='or'>OR</div>
                                            <div className='divider'></div>
                                        </div>
                                        <div className='loginpage_fblogin'>
                                            <div className='fblogo'><img src={fblogo} width="15px"/></div>
                                            <div className='fblogin'>Log in with Facebook</div>
                                        </div>
                                        <div className='loginpage_forgotpass'>Forgot password?</div>
                                    </div>
                                    
                                </div>

                                <div className='noaccount'>
                                    {
                                        this.state.isLogin ? 
                                        <div className='signup'>
                                            Have an account? <span onClick={this.changeLogin} style={{"font-family":"bold","color":"#0095F7"}}>Sign Up </span> 
                                        </div>
                                        :
                                        <div className='signin'>
                                            Don't have an account? <span onClick={this.changeLogin} style={{"font-family":"bold","color":"#0095F7"}}>Sign In</span> 
                                        </div>
                                        

                                    }
                                    
                                         
                                </div>

                                <div className='downloadapp'>
                                    <div className='getapp'>Get the app.</div>
                                    <div className='storelinks'><img src={playstore} width="125px" style={{"margin-right":"10px"}}/><img src={appstore} width="125px" style={{"margin-left":"10px"}}/></div>
                                    
                                </div>

                                

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>

                </Grid>
            </div>
         );
    }
}
 
export default LoginPage;