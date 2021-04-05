import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../../assets/css/techology_style.module.css';

const data = [
    { title: 'Enterprise Asset DEX', description: 'APEX Network utilizes sidechains as one of the key unique features of the blockchain for 1) scalability of standalone applications and localized transactions that do not need to apply to the entire network (in other words enterprise user-specific transactions ) 2) seamless transfer of assets across main network and various sidechains while keeping “workstreams” .' },
    { title: 'Open API/SDKs', description: 'Giving the enterprise the flexibility and tools to customize dApps or build decentralized protocols to into their existing app ecosystem is critical for fast development and adoption, On top of the RESTFul API, there will be initially 4 SDK’s - Java, Scala, Go, and APEXm, an XML-based markup language and syntax system custom-built to quickly customize and deploy decentralized applications. Initial selection of Scala, Java, and Go is considering a combination of enterprise fit, data-driven application suitability, and overall performance.' },
    { title: 'Multi-Role Node Ecosystem', description: 'APEX Network’s diverse node ecosystem enables ways for partners, enterprise users, and the community to participate in ways that add value to the larger network. Our node ecosystem has 3 roles - Supernode, Voternode, and Data Cloud Node, each catered to a different type of participant but each important for maintaining and augmenting value across the network. For more information, please refer to our Node Ecosystem paper.' },
]

class Additional extends Component {
    render() {
        return (
            <section className={Styles.addtionalContainer}>
                <div className="container">
                    <div style={{ width: 300, marginBottom: 60, borderBottom: '3px solid #ef2345' }}>
                        <h4 className="each_page_title">ADDITIONAL FEATURES</h4>
                    </div>
                    <Grid container>
                        {
                            data.map((val, index) => {
                                return (
                                    <Grid item xs={12} sm={4} key={index} className={Styles.item_container}>
                                        <h3 key={index + 1}>{val.title}</h3>
                                        <h6 key={index + 2}>{val.description}</h6>
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

export default Additional;