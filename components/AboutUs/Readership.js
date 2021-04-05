import React, { Component } from 'react';
import Styles from '../../assets/css/about_style.module.css'
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Tiger = [
    { text: 'Forbes China 30 Under 30，2018' },
    { text: 'Manages day-to-day operations of APEX Technologies' },
    { text: 'China Internet Weekly “Innovative Leader of the Year Award”, and “Person of the Year 2016”' },
    { text: 'Built multiple big data analytics systems for Microsoft, Global Sourcesi, Hilton, and various other enterprise customers' },
    { text: 'Keynote speaker at marketing technology and big data conferences such as GDMS, iDigital, & CBIS' },
    { text: 'UC Berkeley BS Political Economy, Minor EECS' }
]

const Richard = [
    { text: 'Director of Engineering @ Alibaba, managed a team of 30+ person R&D team' },
    { text: 'CTO @ 360 Finance' },
    { text: 'Team Lead @ Youku, Machine Learning' },
    { text: 'Team Lead @ Microsoft' },
    { text: 'Microsoft IT Pro Award and Future Star Award' },
    { text: 'Software Engineering @ Autodesk' },
    { text: 'Masters Computer Science from Tongji University' }
]

const Robert = [
    { text: 'Product Director @ Alibaba, big data analytics division' },
    { text: 'Ailbaba "Product Expert of the Year"' },
    { text: "Analytics and personalization recommendation system team leader @Sohu, one of China's largest internet platforms" },
    { text: 'Director of big data products @ Emar' },
    { text: 'Masters in Statistics from Renmin-University w/ focus on Machine Learning' },
]

class Acknowledgements extends Component {
    render() {
        return (
            <section className={Styles.readershipContainer}>
                <div className="container" style={{ paddingTop: '4rem' }}>
                    <div style={{ width: 200, marginBottom: 60, borderBottom: '3px solid #ef2345' }}>
                        <h4 className="each_page_title">LEADERSHIP</h4>
                    </div>
                    <div className={`section-title`}>
                        <Grid container style={{ alignItems: 'center' }} className={Styles.readership_section}>
                            <Grid item xs={12} sm={3}>
                                <img src="./images/assets/avatar1.png" alt="forbes" />
                            </Grid>
                            <Grid item xs={12} sm={1}></Grid>
                            <Grid item xs={12} sm={8}>
                                <h1>Jimmy Hu</h1>
                                <h5>CEO, APEX Network<br /> Founder & CEO, APEX Technologies</h5>
                            </Grid>
                        </Grid>
                        <Grid container className={Styles.readership_section2}>
                            <Grid item xs={12} sm={5}>
                                <div className={Styles.readershop_section2_title}><h6>Forbes China 30 Under 30</h6></div>
                                <div className={Styles.readershop_section2_title}><h6>China Internet Weekly “Artificial Intelligence Person of the Year”</h6></div>
                                <div className={Styles.readershop_section2_title}><h6>Internal big data analyics and predictive AI advisor for Microsoft, Lenovo, and other Fortune 500 corporations.</h6></div>
                            </Grid>
                            <Grid item xs={12} sm={2}></Grid>
                            <Grid item xs={12} sm={5}>
                                <div className={Styles.readershop_section2_title}><h6>Big data and artificial intelligence advisor for Gehrson Lehrman Group and Multiple Major Investment Banks and Financial Institutions.</h6></div>
                                <div className={Styles.readershop_section2_title}><h6>BS Electrical Engineering & Computer Sciences, UC Berkeley Standard Graduate School of Business, Executive Education</h6></div>
                            </Grid>
                        </Grid>
                    </div>
                    <Grid container className={Styles.readership_card_img_containers}>
                        <Grid item xs={12} sm={4} className={Styles.readership_card_item_container}>
                            <div className={Styles.readership_card_img_container}>
                                <img src="./images/assets/avatar2.png" alt="alt" className={Styles.readership_card_item_img} />
                            </div>
                            <h3>Tiger Yang <LinkedInIcon /></h3>
                            <h4>Co-Founder & President</h4>
                            <ul className={Styles.li_container}>
                                {
                                    Tiger.map((val, index) => {
                                        return (
                                            <li key={index}>
                                                <h6 key={index + 1}>{val.text}</h6>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={4} className={Styles.readership_card_item_container}>
                            <div className={Styles.readership_card_img_container}>
                                <img src="./images/assets/avatar3.png" alt="alt" className={Styles.readership_card_item_img} />
                            </div>
                            <h3>Richard Wang <LinkedInIcon /></h3>
                            <h4>CTO</h4>
                            <ul className={Styles.li_container}>
                                {
                                    Richard.map((val, index) => {
                                        return (
                                            <li key={index}>
                                                <h6 key={index + 1}>{val.text}</h6>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={4} className={Styles.readership_card_item_container}>
                            <div className={Styles.readership_card_img_container}>
                                <img src="./images/assets/avatar4.png" alt="alt" className={Styles.readership_card_item_img} />
                            </div>
                            <h3>Robert Xu <LinkedInIcon /></h3>
                            <h4>VP Product</h4>
                            <ul className={Styles.li_container}>
                                {
                                    Robert.map((val, index) => {
                                        return (
                                            <li key={index}>
                                                <h6 key={index + 1}>{val.text}</h6>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Grid>
                    </Grid>
                </div>
            </section >
        );
    }
}

export default Acknowledgements;