import React, { Component } from 'react';
import { Avatar } from '@mui/material';
import './Statusbar.css';
import people1 from '../../images/pp1.png'
import upload from '../../images/statusadd.png'
class Statusbar extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
            statusList:[]
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData=()=>
    {
        let data=[
            {
                "imageurl":people1,
                "username":"rajat narula"
            },
            {
                "imageurl":people1,
                "username":"priyansh agarwal"
            },
            {
                "imageurl":people1,
                "username":"prakhar vats"
            },
            {
                "imageurl":people1,
                "username":"uttkarsh gangwar"
            },
            {
                "imageurl":people1,
                "username":"sneha vats"
            },
            {
                "imageurl":people1,
                "username":"manish gupta"
            },
            {
                "imageurl":people1,
                "username":"rimjhim sharma"
            }
        ]
        this.setState({statusList:data});
    }
    
    render() { 
        return ( 
            <div>
                <div className='statusbar_container'>
                    <img style={{"width":"60px","height":"60px","margin-top":"20px","margin-left":"10px"}} src={upload}/>
                    {
                        this.state.statusList.map((item,index)=>
                        (
                            <div className='status'>
                                <Avatar className='statusbar_status' src={item.imageurl}  />
                                <div className='statusbar_text'>{item.username}</div>
                            </div>

                        ))
                    }
                    

                </div>
            </div>
         );
    }
}
 
export default Statusbar;