import React, { Component } from 'react';
import Maincontent from '../Maincontent/Maincontent';
import Navbar from '../Navbar/Navbar';
import './Home.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <div><Navbar/></div>
                <div><Maincontent/></div>
            </div>
         );
    }
}
 
export default Home;