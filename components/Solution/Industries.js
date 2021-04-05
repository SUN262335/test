import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../../assets/css/solution_style.module.css';

const data = [
    { title: 'Retail', description1: 'APEX offers the retail industry various approaches to optimize its customer experience, CRM, and data management via blockchain-based solutions. For retail companies, a unified customer profile and customer lifecycle management is crucial to success - APEX Technologies is able to help combine a decentralized customer identity management soluton with CRM programs on-chain to deliver optmized engagement.', img: './images/assets/industry1.png' },
    { title: 'Financial Services', description1: 'The financial services sector is increasingly competitive - firms are looking for ways to gain a competitive edge, not just in terms of core offerings. APEX Network provides financial services companies new ways to approach retail customer insights, personalization, and CRM. We are also to help them to obtain compliant, high-quality datasets from the blockchain to help enhance their predictive AI models.', img: './images/assets/industry2.png' },
    { title: 'Automotive', description1: 'For automotive companies, intelligent marketing and branding across the entire customer lifecycle is key to optimizing conversion rate. This requires a combination of data and proper forms of engagement in order to be optimal. APEX Technologies has deep expertise in how to utilize emerging technologies such as blockchain and A to maximize customer lifetime value (CLV).', img: './images/assets/industry3.png' },
    { title: 'Travel', description1: 'Companies in the travel industry are plagued with problems surrounding customer loyalty and customer insights. APEX Network provides the travel industry solutions surrounding customer data management, customer engagement, and customer loyalty, utilizing a combination of on-chain protocols for consent and trust, decentralized customer unified identity, and cross-industry partnerships and reward asset liquidity.', img: './images/assets/industry4.png' },
    { title: 'Luxury & Lifestyle', description1: 'For the luxury industry, deep customer insights and personalized service is key to differentiating in customer experience. APEX Technologies has deep expertise in the luxury sector and how to utilize technologies such as data management and blockchain to transform customer personalization, trust, and more intelligent marketing.', img: './images/assets/industry5.png' },
    { title: 'Consumer Internet', description1: 'Consumer internet companies are the forefront of using technology to disrupt existing markets and create new user experiences, but often now have run into bottlenecks in areas surrounding consumer data, trust, and user engagement levels. APEX is able to help consumer internet companies to explore more balanced and fair interaction models with their users.', img: './images/assets/industry6.png' },
]

class Industries extends Component {
    render() {
        return (
            <section className={Styles.usecaseviewContainer}>
                <div className="container" style={{ width: '100%', padding: 0 }}>

                    <Grid container>
                        {
                            data.map((val, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} className={Styles.usecase_Item_container} style={{ backgroundImage: `url(${val.img})` }} key={index}>
                                        <div className={Styles.usecase_item_content} key={index + 2}>
                                            <h3 key={index + 3}>{val.title}</h3>
                                            <h6 key={index + 4}>{val.description1}</h6>
                                        </div>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>
            </section>
        );
    }
}

export default Industries;