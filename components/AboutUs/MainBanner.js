import React, { Component } from 'react';
import Styles from '../../assets/css/about_style.module.css'
import Grid from '@material-ui/core/Grid';

class MainBanner extends Component {
    render() {
        return (
            <div className={Styles.main_banner}>
                <div className="main-effect"></div>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <Grid container className={Styles.headerContainer}>
                                <Grid item xs={12} sm={4}>
                                    <h1>About Us</h1>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <h5>APEX NETWORK</h5>
                                    <p>APEX is the blockchain infrastructure for next-generation of consumer applications, helping solve and optimize incumbent problems in consumer internet and B2C interactions. APEX provides an enterprise blockchain solution for agile creation of custom dApps with increased privacy and ownership of data, interactivity of consumer experiences, and connectivity of value.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;