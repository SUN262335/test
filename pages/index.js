import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/Home/MainBanner';
import About from '../components/Home/About';
import Products from '../components/Home/Products';
import Footer from '../components/Layouts/Footer';
import CartDrawer from '../components/Common/CartDrawer';
import { Provider } from 'react-redux';
import store from '../store';

class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Navbar />
                    <CartDrawer />
                    <MainBanner />
                    <About />
                    <Products />
                    <Footer />
                </React.Fragment>
            </Provider>
        );
    }
}

export default Index;