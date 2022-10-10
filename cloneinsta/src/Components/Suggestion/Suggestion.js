import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './Suggestion.css';
import people1 from '../../images/pp1.png';
import people2 from '../../images/pp2.png';
import people3 from '../../images/pp4.jpeg';
class Suggestion extends Component {
    constructor(props) {
        super(props);

        this.state={
            suggestionList:[]
        }
    }

    componentDidMount()
    {
        this.getSuggestion();
    }
    
    getSuggestion=()=>{
        let data=[
            {
                "avatar":people2,
                "userName":"Person 1"
            },
            {
                "avatar":people3,
                "userName":"Person 2"
            },
            {
                "avatar":people1,
                "userName":"Person 3"
            },
            {
                "avatar":people2,
                "userName":"Person 4"
            },
            {
                "avatar":people3,
                "userName":"Person 5"
            }
        ];

        this.setState({suggestionList:data});
    }


    render() { 
        return ( 
            <div>
                <div className='suggestion_container'>
                    <div className='suggestion_header'>Suggestions For You</div>
                    {
                        this.state.suggestionList.map((item,index)=>(
                            <div className='suggestion_suggestions'>
                                <Avatar className='suggestion_avatar' src={item.avatar}/>
                                <div className='suggestion_username'>{item.userName}</div>
                                <div className='suggestion_followbutton'>Follow</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        );
    }
}
 
export default Suggestion;