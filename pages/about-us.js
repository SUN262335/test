import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Overview from '../components/AboutUs/Overview';
import Readership from '../components/AboutUs/Readership';
import MainBanner from '../components/AboutUs/MainBanner';
import Acknowledgements from '../components/AboutUs/Acknowledgements';
import Footer from '../components/Layouts/Footer';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <Overview />
                <Acknowledgements />
                <Readership />
                <Footer />
            </React.Fragment>
        );
    }
}

export default AboutUs;