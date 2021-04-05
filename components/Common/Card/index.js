import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Styles from './style.module.css'
import { ChangeCount } from "../../../store/reducers/action";

const Card = (props) => {
    const saveCart = async (item) => {
        let total_quantity = 0;
        let iddata = localStorage.getItem('product-id');
        let namedata = localStorage.getItem('product-name');
        let quentitydata = localStorage.getItem('product-quentity');
        let pricedata = localStorage.getItem('product-price');
        let imgdata = localStorage.getItem('product-img');

        if (iddata) {
            let obj = JSON.parse(iddata);
            var flag = 1;
            Object.keys(obj).map(function (key) {
                if (key === item.id) {
                    flag = 0;
                }
            });
            if (flag) {
                obj[item.id] = item.id;
            }
            localStorage.setItem('product-id', JSON.stringify(obj));
        }

        if (namedata) {
            let obj = JSON.parse(namedata);
            var flag = 1;
            Object.keys(obj).map(function (key) {
                if (key === item.id) {
                    flag = 0;
                }
            });
            if (flag) {
                obj[item.id] = item.name;
            }
            localStorage.setItem('product-name', JSON.stringify(obj));
        }

        if (pricedata) {
            let obj = JSON.parse(pricedata);
            var flag = 1;
            Object.keys(obj).map(function (key) {
                if (key === item.id) {
                    flag = 0;
                }
            });
            if (flag) {
                obj[item.id] = item.price;
            }
            localStorage.setItem('product-price', JSON.stringify(obj));
        }

        if (imgdata) {
            let obj = JSON.parse(imgdata);
            var flag = 1;
            Object.keys(obj).map(function (key) {
                if (key === item.id) {
                    flag = 0;
                }
            });
            if (flag) {
                obj[item.id] = item.image[0].src;
            }
            localStorage.setItem('product-img', JSON.stringify(obj));
        }

        if (quentitydata) {
            let obj = JSON.parse(quentitydata);
            var flag = 1;
            Object.keys(obj).map(function (key) {
                if (key === item.id) {
                    obj[key] = obj[key] + 1;
                    flag = 0;
                }
                if (obj[key] !== "A") {
                    total_quantity += obj[key];
                }
            });
            if (flag) {
                obj[item.id] = 1;
            }
            localStorage.setItem('product-quentity', JSON.stringify(obj));
        }
        props.ChangeCount(total_quantity);
    };

    return (
        <div className={Styles.card_container}>
            <img src={props.item.image[0].src} alt={props.item.image[1].alt} className={Styles.img_card} />
            <Button
                variant="contained"
                className={Styles.btn_add}
                onClick={() => { saveCart(props.item) }}
            >
                ADD TO CART
            </Button>
            <div className={Styles.label1}>{props.item.category}</div>
            <div className={Styles.label2}>{props.item.name}</div>
            <div className={Styles.label3}>${props.item.price}</div>
            {/* {
                props.item.bestseller ?
                    <div className={Styles.seller_container}>Hello</div> :
                    null
            } */}
        </div>
    )
}
function mapStateToProps(state) {
    return {
        count: state.total_count
    };
}
const mapDispatchToProps = {
    ChangeCount
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
