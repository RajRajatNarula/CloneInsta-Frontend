import React, { Component } from 'react';
import Post from '../Post/Post';
import './Mainpage.css';
class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state={
            postList:[]
        }
    }

    componentDidMount()
    {
        this.getPost();
    }

        
    getPost=()=>{
        const thisContext=this
        // let data=[
        //     {
        //         "userName":"Rajat Narula",
        //         "postLike":"6567573"
        //     },
        //     {
        //         "userName":"Priyansh Agarwal",
        //         "postLike":"7534895"
        //     },
        //     {
        //         "userName":"Prakhar Vats",
        //         "postLike":"4845853"
        //     }
        // ];


        fetch("https://instagraamclonefrontend.herokuapp.com/post")
                    .then(response => response.json())
                    .then(data => {
                            console.log(data)
                            thisContext.setState({postList:data});
                            
                    });


        
    }

    render() { 
        return ( 
            <div>
                {
                    this.state.postList.map((item,index)=>(
                        <Post id={item.postId} userName ={item.userName} postImage={item.postPath}  imageLikes={item.likeCount}/>
                        
                    ))
                }
            </div>
        );
    }

    
}


 
export default Mainpage;
