import React, { Component } from 'react';
import Styles from '../../assets/css/home_style.module.css'
import Grid from '@material-ui/core/Grid';

class About extends Component {
    render() {
        return (
            <Grid container className="container">
                <Grid item xs={12} sm={7}>
                    <div className={Styles.label22}>About the Samurai King Resting</div>
                    <div className={Styles.label22} style={{ marginTop: 9, marginBottom: 12,color:'#656565' }}>Pets</div>
                    <div className={Styles.label18} style={{ marginBottom: 20 }}>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder</div>
                    <div className={Styles.label18}>text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</div>
                </Grid>
                <Grid item xs={12} sm={1}></Grid>
                <Grid item xs={12} sm={4}>
                    <div className={Styles.label22} style={{ textAlign: 'right', marginBottom: 27 }}>People also buy</div>
                    <div className={Styles.row_container}>
                        <img src="./images/assets/Rectangle1.png" alt="Rectangle1" />
                        <img src="./images/assets/Rectangle2.png" alt="Rectangle2" />
                        <img src="./images/assets/Rectangle3.png" alt="Rectangle3" />
                    </div>
                    <div className={Styles.detail_container}>
                        <div className={Styles.label22} style={{ marginTop: 54, marginBottom: 9 }}>Details</div>
                        <div className={Styles.label16}>Size: 1020 x 1020 pixel</div>
                        <div className={Styles.label16}>Size: 15 mb</div>
                    </div>
                </Grid>
                <div className={Styles.line}></div>
            </Grid>
        );
    }
}

export default About;