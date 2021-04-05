import React, { Component } from 'react';
import Styles from '../../assets/css/techology_style.module.css';
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
                                    <h1>Technology</h1>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <h5>Enterprise blockchain technology designed to scale and deploy real-world business applications with ease.</h5>
                                    <p>APEX utilizes an unique approach to developing the core technology - focus on real-world value and enterprise adoption over anything else. This means fusing an ideal combination of performance, scalability, flexiblity, and features making it ideal for development of consumer dApps or embedding blockchain protocol into existing enterprise applications.</p>
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