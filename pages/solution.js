import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Usecase from '../components/Solution/Usecase';
import MainBanner from '../components/Solution/MainBanner';
import Industries from '../components/Solution/Industries';
import Footer from '../components/Layouts/Footer';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <Usecase />
                <Industries />
                <Footer />
            </React.Fragment>
        );
    }
}

export default AboutUs;