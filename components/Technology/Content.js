import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from '../../assets/css/techology_style.module.css';

const data = [
    { title: 'Enterprise Sidechains', description: 'APEX Network utilizes sidechain technology as one of the key unique features of the blockchain for scalability of enterprise-specific applications and localized workstreams or transactions that do not need to apply to the entire network and while keeping workstreams separate, continue to facilitate the seamless transfer of assets across main network and various side networks.Enterprises will be able to deploy applications and blockchain assets via their own sidechains without having to worry about dependent performance factors associated to other applications and the main network.', img: './images/assets/technology_icon_1.png' },
    { title: 'Two-fold Consensus', description: 'APEX Network employs Delegated Proof-of-Stake (DPOS) as its consensus mechanism for the main network, which uses a reputation system and real-time voting to achieve consensus. DPOS allows for major speedups in transaction times and minimize effort and resources required to run and secure the network. For sidechains created extending the main network, a Proof-of-Stake (POS) consensus mechanism will be used - for the purpose of growing the sidechain ecosystem in a scalable manner without having the deploy a Supernode (delegate) system.', img: './images/assets/technology_icon_2.png' },
    { title: 'Multi-layered Smart Contacts', description: 'APEX Network utilizes a different smart contract system than typical public blockchains - our goal is to provide enterprise users with the largest flexibility, scalability, and confidentiality when necessary for their various B2C (and B2B) applications. APEX Network’s approach is to create multi-layered architecture for smart contracts, which consists of the data layer, logic layer, and middleware layer.The data layer is the on-chain layer defining the data logic and schema on the main network or side networks, where all data and transactions will be persistent. The logic layer is a secure layer that hosts the functional and business logic of the smart contract. The middleware layer is the service layer that communicates with outside systems and data sources.', img: './images/assets/technology_icon_2.png' },
    { title: 'Robust Data Connectors', description: 'Connectivity to outside devices, applications, and data sources is to maximize the real-world value of dApps, but for most public blockchains this process is difficult and and often requires additional plugins or modules, for example oracles on Ethereum. Through proprietary middleware technology APEX Data Connector, APEX Network makes it easy to connect to any external systems and data sources with ease and minimal programming, increasing the enterprise-readiness and adoption rate of the blockchain itself. The technology is based off of APEX Technologies’ existing middleware technology product (LINK) was used with large success by its enterprise user base and decreased integration time and resources to nearly 15% of manual integrations.', img: './images/assets/technology_icon_2.png' },
    { title: 'Data Transaction Engine', description: 'One of the advantages of APEX Network is that it has built-in capability for data privacy, consent protocols, and transactions protocols for both B2C and B2B use cases. We use a hybrid on-chain and off-chain consumer data management model that facilitates data ownership, transparency, auditability, and access control. We call this data management protocol the APEX Transactional Data Management System (ATDM) - ATDM is built as a native module in the APEX Virtual Machine and can be easily plugged into smart contracts and decentralized applications, and has the ability to facilitate data transactions, consent protocols, encryption, and decentralized storage.', img: './images/assets/technology_icon_2.png' },
]

class Content extends Component {
    render() {
        return (
            <section className={Styles.techologyviewContainer}>
                {
                    data.map((val, index) => {
                        return (
                            index % 2 === 0 ?
                                (
                                    <section className={Styles.techology_content1} key={index}>
                                        <div className="container" key={index + 1}>
                                            <Grid container key={index + 2}>
                                                <Grid item xs={12} sm={6} className={Styles.techology_Item_container} key={index + 3}>
                                                    <img src={val.img} alt={val.img} className={Styles.techology_Item_img} key={index + 4} />
                                                </Grid>
                                                <Grid item xs={12} sm={6} className={Styles.techology_Item_container} key={index + 5}>
                                                    <div className={Styles.techology_item_content} key={index + 6}>
                                                        <h3 key={index + 7}>{val.title}</h3>
                                                        <h6 key={index + 8}>{val.description}</h6>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </section>
                                )
                                :
                                (
                                    <section className={Styles.techology_content2} key={index}>
                                        <div className="container" key={index + 1}>
                                            <Grid container key={index + 2}>
                                                <Grid item xs={12} sm={6} className={Styles.techology_Item_container} key={index + 3}>
                                                    <div className={Styles.techology_item_content} key={index + 4}>
                                                        <h3 key={index + 5}>{val.title}</h3>
                                                        <h6 key={index + 6}>{val.description}</h6>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} sm={6} className={Styles.techology_Item_container} key={index + 7}>
                                                    <img src={val.img} alt={val.img} className={Styles.techology_Item_img} key={index + 8} />
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </section>
                                )
                        )
                    })
                }
            </section>
        );
    }
}

export default Content;