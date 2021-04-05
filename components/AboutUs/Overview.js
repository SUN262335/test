import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../../assets/css/about_style.module.css'

class Overview extends Component {
    render() {
        return (
            <section className={Styles.overviewContainer}>
                <div className="container">
                    <div style={{ width: 170, marginBottom: 60, borderBottom: '3px solid #ef2345' }}>
                        <h4 className="each_page_title">OVERVIEW</h4>
                    </div>
                    <div className="section-title">
                        <Grid container>
                            <Grid item xs={12} sm={3}>
                                <img src="./images/assets/apexlogo.png" alt="apexlogo" />
                            </Grid>
                            <Grid item xs={12} sm={1}></Grid>
                            <Grid item xs={12} sm={8}>
                                <h6 className={Styles.about_overview_h6}>APEX Technologies (formerly Chinapex) is a leading data technology and AI company headquartered out of Shanghai focused on developing innovative solutions using a combination of big data, artificial intelligence, and blockchain to tackle hard problems in customer data, , marketing, and CRM.</h6>
                            </Grid>
                        </Grid>
                    </div>

                    <Grid container>
                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className={`funfact ${Styles.funfact}`}>
                                <h3><span>100</span>+</h3>
                                <h4>Employees across 5 offices worldwide</h4>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className={`funfact ${Styles.funfact}`}>
                                <h3><span>300</span>+</h3>
                                <h4>Mid to large enterprise customers</h4>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className={`funfact ${Styles.funfact}`}>
                                <h3><span>40</span>+</h3>
                                <h4>Number of employees in research & development</h4>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className={`funfact ${Styles.funfact}`}>
                                <h3><span>45</span>+</h3>
                                <h4>Worldwide technical integration partners</h4>
                            </div>
                        </div>
                    </Grid>
                </div>
            </section>
        );
    }
}

export default Overview;