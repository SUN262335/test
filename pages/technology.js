import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Content from '../components/Technology/Content';
import MainBanner from '../components/Technology/MainBanner';
import Additional from '../components/Technology/Additional';
import Footer from '../components/Layouts/Footer';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <Content />
                <Additional />
                <Footer />
            </React.Fragment>
        );
    }
}

export default AboutUs;