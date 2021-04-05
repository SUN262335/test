import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../../assets/css/solution_style.module.css';

const data = [
    { title: 'Marketing', description1: 'B2C marketing has had for the most part subpar efficacy, including with using data-driven methods. One of the problems lies in the nature of B2C interactions and marketing being one-sided and solicitive in nature - also, marketing channels and middlemen often expend too much value in the process.', description2: 'APEX gives enterprises the tools to shift the nature of interactions to become more balanced, with more increased trust, engagement, and direct value going back to the consumer.', img: './images/assets/usecase1.png' },
    { title: 'CRM & Loyalty', description1: 'Enterprises from various consumer verticals including travel, retail, and financial services have attempted to create their own CRM and loyalty programs, and the results for the most part have been mediocre.', description2: 'APEX enables the enterprise to have new ways to increase the efficacy of CRM and loyalty programs and augment their value. Our sidechain technology and DEX enables tokenization of reward points and other enterprise assets and allows them to amplify their value by connecting to the larger enterprise network.', img: './images/assets/usecase2.png' },
    { title: 'Consumer Data', description1: 'Consumer data is a large area that faces various problems that enterprises face on a widespread level, and touches upon a multitude of facets, including marketing effectiveness, legal & compliance (ie. GDPR), privacy & security, and business intelligence.', description2: 'APEX’s blockchain technology includes various native modules and protocols that solve problems surrounding data quality, data transactions, security/storage, legal compliance, and data ownership model.', img: './images/assets/usecase3.png' },
    { title: 'Customer Experience', description1: 'Giving the consumer a seamless customer experience across all touchpoints and devices requires advanced data management practices, which is not always easy to implement', description2: 'APEX provides a solution for managing a decentralized customer profile, where the data and profile is owned and managed by the consumer herself, which enables optimal personalization across various different touchpoints (online, mobile, retail, IoT) and maximizes customer lifecycle value (CLV) and the bottom line.', img: './images/assets/usecase4.png' },
    { title: 'Artificial Intelligence', description1: 'Enterprise artificial intelligence has enabled businesses to leverage deep insights from internal and external data to drive optimized results for the bottom line.', description2: 'APEX Network has various ways of helping enterprises maximize the value out of their existing AI tools and technology by enhancing their datasets with high-quality compliant real-time and non real-time from the blockchain. For enterprises that haven’t leveraged AI, APEX’s blockchain will have an in-depth integration with APEX Technologies core AI product, IQ.', img: './images/assets/usecase5.png' },
]

class Usecase extends Component {
    render() {
        return (
            <section className={Styles.usecaseviewContainer}>
                <div className="container" style={{ padding: 0, width: '100%' }}>
                    <div className={`${Styles.usecase_usecate_title_container}`}>
                        <div style={{ width: 170, borderBottom: '3px solid #ef2345' }}>
                            <h4 className="each_page_title">USE CASES</h4>
                        </div>
                    </div>
                    <Grid container>
                        {
                            data.map((val, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} className={Styles.usecase_Item_container} style={{ backgroundImage: `url(${val.img})` }} key={index}>
                                        <div className={Styles.usecase_item_content} key={index + 3}>
                                            <h3 key={index + 4}>{val.title}</h3>
                                            <h6 key={index + 5}>{val.description1}</h6>
                                            <h6 key={index + 6}>{val.description2}</h6>
                                        </div>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <div className={Styles.usecaseviewtitle_container}>
                        <h4 className={`${Styles.usecaseviewTitle} each_page_title`}>INDUSTRIES</h4>
                    </div>
                </div>
            </section >
        );
    }
}

export default Usecase;