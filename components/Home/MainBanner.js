import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Styles from '../../assets/css/home_style.module.css'

export default function MainBanner() {

    useEffect(() => {
        let originObj = { "a": "A" };
        let namedata = localStorage.getItem('product-name');
        if (namedata === null) {
            localStorage.setItem('product-id', JSON.stringify(originObj));
            localStorage.setItem('product-name', JSON.stringify(originObj));
            localStorage.setItem('product-quentity', JSON.stringify(originObj));
            localStorage.setItem('product-price', JSON.stringify(originObj));
            localStorage.setItem('product-img', JSON.stringify(originObj));
        }
    }, [])

    return (
        <div className="main-banner">
            <div className="container" style={{ marginTop: 186 }} >
                <div className={Styles.row_container} style={{ marginBottom: 30 }}>
                    <div className={Styles.label322}>Samurai King Resting</div>
                    <Button
                        variant="contained"
                        className={Styles.btn_add}
                    >
                        ADD TO CART
                    </Button>
                </div>
                <div style={{ width: '100%' }}>
                    <img src="./images/assets/tchebotarev.png" alt="tchebotarev" style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    );
}
