import { Avatar, Grid } from '@mui/material';
import React, { Component } from 'react';
import './Navbar.css'
import insta_logo from '../../images/logoinsta.png'
import homelogo from '../../images/home.svg'
import msglogo from '../../images/message.svg'
import uploadlogo from '../../images/upload.png'
import findlogo from '../../images/find.svg'
import reactlogo from '../../images/love.svg'
import people4 from '../../images/pp4.jpeg'


import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import CircularProgress from '@mui/material/CircularProgress';
import {auth,storage} from "../firebase-config";
import Mainpage from '../Mainpage/Mainpage';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state={
            progressBar:"",
        }
    }
    


    upload=(event)=>{
        let image=event.target.files[0];
        const thisContext=this;
        if(image==null || image==undefined)
            return;

       
        const storageRef=ref(storage,`image/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            'state_changed', 
            function(snapshot) {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                 thisContext.setState({progressBar:progress})

                },
             
            function(error) {
                alert(error);
                
            }, 
            function(){
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("SUCCESS")
                    console.log(downloadURL)
                    console.log(localStorage.getItem("users"))
                    let payload = {
                        "postId" : Math.floor(Math.random()*10000).toString() ,
                        "userId": JSON.parse(localStorage.getItem("users")).uid,
                        "postPath" : downloadURL ,
                        "timeStamp" : new Date().getTime(),
                        "likeCount" : 10,
                        "userName" : "Har Har"
                    }

                    const requestOptions={
                        method : "POST",
                        headers : {'Content-Type' : "application/json"},
                        body : JSON.stringify(payload),
                    }

                    fetch("http://localhost:8080/post" , requestOptions)
                    .then(response => response.json())
                    .then(data => {
                            console.log(data)
                            window.location.reload();
                            


                    })

                    .catch(error => {
                        console.log(error)
                        
                    })



                  });
                
            }
        );
                    
    }


    render() { 
        return ( 
            <div>
                <div className='navbar_content'>
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={3}>
                            <div className='insta_logo'>
                                <img src={insta_logo} width="125px"/>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <input className='searchbar' type="text" placeholder="Search" />
                        </Grid>
                        <Grid item xs={3} style={{"display":"flex"}}>
                            <img className='navbar_logos' src={homelogo} placeholder="home" width="25px"/>
                            <img className='navbar_logos' src={msglogo} placeholder="message" width="25px"/>
                            <div>
                                <label for="fileupload">
                                    <img className='navbar_logos_upload' src={uploadlogo} placeholder="upload" width="25px"/>
                                    <div className="progressbar"> <CircularProgress  variant="determinate" value={this.state.progressBar} /></div>
                                </label>
                                <input id="fileupload" onChange={this.upload} type="file" style={{"display":"none"}}/>
                            </div>
                            <img className='navbar_logos' src={findlogo} placeholder="find" width="25px"/>
                            <img className='navbar_logos' src={reactlogo} placeholder="react" width="25px"/>
                            <Avatar className='navbar_avatar' src={people4} style={{"maxWidth":"30px","maxHeight":"30px"}}/>
                            
                            
                        </Grid>
                        
                        <Grid item xs={1}></Grid>
                    </Grid>
                    
                </div>
            </div>
         );
    }
}
 
export default Navbar;