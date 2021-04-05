import React, { Component } from 'react';
import Styles from '../../assets/css/solution_style.module.css';
import Grid from '@material-ui/core/Grid';

class MainBanner extends Component {
    render() {
        return (
            <div className={Styles.main_banner}>
                <div className="main-effect"></div>
                <div className="container" >
                    <Grid container className={`${Styles.headerContainer} ${Styles.main_banner_content}`}>
                        <Grid item xs={12} sm={4}>
                            <h1>Solutions</h1>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <h3>Enterprise blockchain technology for solving real business problems across various industry verticals</h3>
                            <p>APEX is a blockchain built for optimizing consumer-centric business - creating stronger 1-to-1 relationships between enterprises and their customers. APEX is a full-customer lifecycle solution enabling enterprises to increase trust and privacy in B2C data-related applications, increase interactivity and engagement, and augment value of CRM and loyalty programs.</p>
                        </Grid>
                    </Grid>
                </div>

                <div className={`${Styles.scrollContainer} container`}>
                    <div style={{ width: 170, borderBottom: '3px solid #ef2345' }}>
                        <h4 className="each_page_title">USE CASES</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;