import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import people1 from '../../images/pp3.jpeg';
import './Infosection.css';
class Infosection extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
   
    render() { 
        return ( 
            <div>
                <div className='infosection_container'>
                    <div> <Avatar className='infosection_avatar' src={people1}/> </div>
                    <div className='infosection_userdetails'>
                        <div className='infosection_userid'>raj_raj_narula</div>
                        <div className='infosection_username'>Rajat Narula</div>
                    </div>
                    <div className='infosection_switch'>Switch</div>

                </div>
            </div>
         );
    }
}
 
export default Infosection;