import React, { Component } from 'react';
import './Maincontent.css';
import { Grid } from '@mui/material';
import Statusbar from '../Statusbar/Statusbar';
import Mainpage from '../Mainpage/Mainpage';
import Infosection from '../Infosection/Infosection';
import Suggestion from '../Suggestion/Suggestion';
class Maincontent extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6}>
                        <div>
                            <Statusbar/>
                            <Mainpage/>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <Infosection/>
                        <Suggestion/>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    
                </Grid> 
            </div>
         );
    }
}
 
export default Maincontent;
<div>
    Main Content
</div>