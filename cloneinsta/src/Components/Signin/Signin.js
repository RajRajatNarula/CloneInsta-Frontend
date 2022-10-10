import React, { Component } from 'react';
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth,storage} from "../firebase-config";
import '../LoginPage.css';
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state={

            emailId:null,
            password:null

         }
    }

    provideEmail = (event) => {
        this.state.emailId=event.currentTarget.value;
    }

    providePassword = (event) => {
        this.state.password=event.currentTarget.value;
    }

    login=()=>{
        
signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
  .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            localStorage.setItem("users",JSON.stringify(user));
            window.location.reload();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    
    render() { 
        return ( 
            <div>
                <input className='loginpage_text'  onChange={this.provideEmail} type ="text" placeholder='Phone number, username or email'/>
                <input className='loginpage_text'  onChange={this.providePassword} type="password" placeholder='Password'/>
                <button className='loginpage_signinbutton' onClick={this.login} >Log In</button>
            </div>
         );
    }
}
 
export default Signin;