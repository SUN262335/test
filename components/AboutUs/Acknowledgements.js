import React, { Component } from 'react';
import Styles from '../../assets/css/about_style.module.css'
import Grid from '@material-ui/core/Grid';

class Acknowledgements extends Component {
    render() {
        return (
            <section className={Styles.acknowledgementsContainer}>
                <div className={Styles.acknowledgements_effect}></div>
                <div className="container" style={{ paddingTop: '4rem' }}>
                    <div style={{ width: 330, marginBottom: 60, borderBottom: '3px solid #ef2345' }}>
                        <h4 className="each_page_title">ACKNOWLEDGEMENTS</h4>
                    </div>
                    <div className="section-title" style={{ marginBottom: 0 }}>
                        <Grid container className={Styles.acknowledgementsItemcontainer}>
                            <Grid item xs={12} sm={3}>
                                <img src="./images/assets/forbes.png" alt="forbes" />
                            </Grid>
                            <Grid item xs={12} sm={1}></Grid>
                            <Grid item xs={12} sm={8}>
                                <h5>China’s Top 50 Most Promising Companies</h5>
                            </Grid>
                        </Grid>
                        <Grid container className={Styles.acknowledgementsItemcontainer}>
                            <Grid item xs={12} sm={3}>
                                <img src="./images/assets/microsoft.png" alt="forbes" />
                            </Grid>
                            <Grid item xs={12} sm={1}></Grid>
                            <Grid item xs={12} sm={8}>
                                <h5>Microsoft Accelerator Selectee & Microsoft Partner</h5>
                            </Grid>
                        </Grid>
                        <Grid container className={Styles.acknowledgementsItemcontainer}>
                            <Grid item xs={12} sm={3}>
                                <img src="./images/assets/ciweek.png" alt="forbes" />
                            </Grid>
                            <Grid item xs={12} sm={1}></Grid>
                            <Grid item xs={12} sm={8}>
                                <h5>Ranked as the Top AI Company in China by China Internet Weekly</h5>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section >
        );
    }
}

export default Acknowledgements;