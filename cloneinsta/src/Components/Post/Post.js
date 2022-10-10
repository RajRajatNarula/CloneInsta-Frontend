import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './Post.css';
import people1 from '../../images/pp3.jpeg';
import edit from '../../images/edit.svg';
import rajat from '../../images/rajat.jpg'
import like from "../../images/love.svg"; 
import comment from "../../images/comment.svg"; 
import share from "../../images/share.svg"; 
import save from "../../images/save.svg"; 
import Mainpage from '../Mainpage/Mainpage';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state={
            commentList:[]
        }
    }
    componentDidMount()
    {
        this.getComment();
    }

    submitComments=(event)=>
    {
         if(event.key=="Enter")
         {
            let comment=event.currentTarget.value;
            event.currentTarget.value=""
            if(comment != null || comment != undefined)
            {
                    let payload = {
                        "commentId" : Math.floor(Math.random()*10000).toString() ,
                        "userId": JSON.parse(localStorage.getItem("users")).uid,
                        "postId" : this.props.id,
                        "timeStamp" : new Date().getTime(),
                        "comment" : comment
                    }

                    const requestOptions={
                        method : "POST",
                        headers : {'Content-Type' : "application/json"},
                        body : JSON.stringify(payload),
                    }

                    fetch("https://instagraamclone.herokuapp.com/comments" , requestOptions)
                    .then(response => response.json())
                    .then(data => {
                            console.log(data)
                            console.log("Commented Successfully")
                            this.getComment();


                    })

                    .catch(error => {
                        console.log(error)

                    })
            }
         }
    }

    getComment=()=>{
        // let data=[
        //     {
        //         "userName":"Priyansh ",
        //         "commmentId":"1",
        //         "timestamp":"12:25",
        //         "comment":" Comment 1"
        //     },
        //     {
        //         "userName":"Prakhar ",
        //         "commmentId":"2",
        //         "timestamp":"12:35",
        //         "comment":" Comment 2"
        //     },
        //     {
        //         "userName":"Uttkarsh ",
        //         "commmentId":"3",
        //         "timestamp":"12:45",
        //         "comment":" Comment 3"
        //     }
        // ];

        fetch("https://instagraamclone.herokuapp.com/comments/"+this.props.id)
        .then(response => response.json())
        .then(data => {
                console.log(data)
                this.setState({commentList:data});
                
        });
        
    }


    

    
    render() { 
        return ( 
            <div>

                <div className='post_container'>

                    {/* Header */}
                    <div className='post_header'>
                        <Avatar className='post_avatar' src={people1}></Avatar>
                        <div className='post_username'>{this.props.userName}</div>
                        <div className='post_edit'><img style={{"position": "absolute","right": "30%" }} src={edit}/></div>
                    </div>

                    {/* Image */}
                    <div className='post_media'>
                        <img src={this.props.postImage} width="550px"/>
                    </div>

                    {/* Analytics */}
                    <div>
                        <div className='post_analytics'>
                            <img src={like}  className='post_reactions'/>
                            <img src={comment}  className='post_reactions'/>
                            <img src={share}  className='post_reactions'/>
                            <img src={save} className='post_reaction_save'/>
                        </div>
                        <div className='analytics_likes'>{this.props.imageLikes} Likes</div>
                        <div className='analytics_username_caption'>
                            <div className='analytics_username'>{this.props.userName}</div>
                            <div className='analytics_caption'>Chaand Taare Sitaare</div>
                        </div>
                    </div>

                    {/* Comment */}
                    <div className='post_comments'>
                        <div style={{"color":"#989898","margin-left":"20px","margin-top":"5px"}} >View All Comments</div>
                        {
                        this.state.commentList.map((item,index)=>(
                            index<4 ?
                            <div style={{"margin-left":"20px","margin-top":"5px"}} ><span style={{"font-weight": "bold"}}>{item.userName}</span> : {item.comment}</div> : <span></span>

                        ))
                        }
                    </div>

                    {/* Write Comment */}
                    <div style={{"display":"flex"}}>
                        <input className='post_comment_bar' onKeyPress={this.submitComments}  type="text" placeholder="Add a comment" />
                          
                    </div> 

                </div>

            </div>
         );
    }
}
 
export default Post;
