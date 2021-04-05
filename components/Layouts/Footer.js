import React, { Component } from 'react';
import Styles from '../../assets/css/layouts_style.module.css';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div>
                    <div style={{ display: 'flex' }}>
                        <div className="col-lg-12 col-sm-12 col-md-12">
                            <div className={Styles.footer_title}>Join the conversation</div>
                            <div className={Styles.footer_item_container}>
                                <a href="https://www.kakaocorp.com/">
                                    <img src="./images/assets/footer_asset1.png" alt="footer_asset1" className={Styles.footer_item_img} />
                                </a>
                                <a href="https://twitter.com/">
                                    <img src="./images/assets/footer_asset2.png" alt="footer_asset2" className={Styles.footer_item_img} />
                                </a>
                                <a href="https://www.reddit.com/">
                                    <img src="./images/assets/footer_asset3.png" alt="footer_asset3" className={Styles.footer_item_img} />
                                </a>
                                <a href="https://medium.com/">
                                    <img src="./images/assets/footer_asset4.png" alt="footer_asset4" className={Styles.footer_item_img} />
                                </a>
                                <a href="http://github.com/">
                                    <img src="./images/assets/footer_asset5.png" alt="footer_asset5" className={Styles.footer_item_img} />
                                </a>
                            </div>
                            <div>
                                <img src="./images/assets/footer_asset6.png" alt="footer_asset6" className={Styles.footer_item_help} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;