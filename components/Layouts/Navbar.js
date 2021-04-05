import React, { Component, useEffect } from 'react';
import Link from '../../utils/ActiveLink';
import Styles from '../../assets/css/layouts_style.module.css';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const Navbar = (props) => {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        let total_quantity = 0;
        let quentitydata = localStorage.getItem('product-quentity');
        if (quentitydata) {
            let obj = JSON.parse(quentitydata);
            var flag = 1;
            Object.keys(obj).map(function (key) {
                if (obj[key] !== "A") {
                    total_quantity += obj[key];
                }
            });
        }
        setCount(total_quantity);
    }, [props.count])

    const [collapsed, setCollapsed] = React.useState(true)
    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }, [])

    const handleViewCartState = () => {
        document.getElementById('btn_cartDrawer').click();
        console.log('asldfasdf')
    }

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="luvion-nav">
                    <div className="container">
                        <div className={Styles.header_container}>
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={require("../../images/assets/logo.png")} alt="logo" />
                                    <img src={require("../../images/assets/logo.png")} alt="logo" />
                                </a>
                            </Link>
                            <IconButton aria-label="cart" onClick={handleViewCartState}>
                                <StyledBadge badgeContent={count} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </div>
                        {/* <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={require("../../images/assets/logo.png")} alt="logo" />
                                    <img src={require("../../images/assets/logo.png")} alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ShoppingCartIcon />
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link">Home</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/about-us">
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/technology">
                                            <a className="nav-link">Technology</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/solution">
                                            <a className="nav-link">Solutions</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item" className={Styles.active}>
                                        <Link href="/explorer">
                                            <a className="nav-link">Explorer</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


function mapStateToProps(state) {
    return {
        count: state.total_count
    };
}
export default connect(mapStateToProps)(Navbar);