import React, { Component } from 'react';
import {storage,auth} from "../firebase-config";
import {createUserWithEmailAndPassword } from "firebase/auth";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId:null,
            name:null,
            username:null,
            password:null
         }
    }
    
    provideEmail = (event) => {
        this.state.emailId=event.currentTarget.value;
    }

    provideName = (event) => {
        this.state.name=event.currentTarget.value;
    }

    provideUsername = (event) => {
        this.state.username=event.currentTarget.value;
    }

    providePassword = (event) => {
        this.state.password=event.currentTarget.value;
    }
    

    newSignup = () => {
        

        
        createUserWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);

                    let payload = {
                        "userId" : user.uid ,
                        "userName": this.state.username,
                        "name" : this.state.name ,
                        "profileImage" : "www.google.com"
                    }

                    const requestOptions={
                        method : "POST",
                        headers : {'Content-Type' : "application/json"},
                        body : JSON.stringify(payload),
                    }

                    fetch("http://localhost:8080/users" , requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem("users",JSON.stringify(user));
                        window.location.reload();

                    })

                    .catch(error => {

                    })

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
            }
        );
    }
z

    render() { 
        return ( 
            <div>
                <input className='loginpage_text' onChange={this.provideEmail} type="text" placeholder='Mobile Number or Email'/>
                <input className='loginpage_text' onChange={this.provideName} type="text" placeholder='Full Name'/>
                <input className='loginpage_text' onChange={this.provideUsername} type="text" placeholder='Username'/>
                <input className='loginpage_text' onChange={this.providePassword} type="text" placeholder='Password'/>
                <button className='loginpage_signinbutton' onClick={this.newSignup}>Sign Up</button>
            </div>
         );
    }
}
 
export default Signup;