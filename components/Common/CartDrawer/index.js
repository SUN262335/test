import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import { useHistory } from 'react-router-dom';
import { ChangeCount } from "../../../store/reducers/action";
import CancelIcon from '@material-ui/icons/Cancel';
import { connect } from 'react-redux';
// import { ChangeCartFlag, ChangePerQuantity, ChangePerCost, AddCartIcon } from "../../../reducers/action";
// import Backdrop from './backdrop';

const useStyles = makeStyles({
    list: {
        width: 350,
    },
    fullList: {
        width: 'auto',
    },
});

function TemporaryDrawer(props) {
    // let localState = localStorage.getItem('user');
    // if (localState && typeof JSON.parse(localState) === 'object') {
    //     localState = JSON.parse(localState);
    // }

    // const history = useHistory();

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [Foodid, setFoodid] = React.useState([]);
    const [Foodname, setFoodname] = React.useState([]);
    const [Foodquantity, setFoodquantity] = React.useState([]);
    const [Foodimg, setFoodimg] = React.useState([]);
    const [Foodprice, setFoodprice] = React.useState([]);

    const init = async () => {
        let localStateCartId = localStorage.getItem('product-id');
        let localStateCartName = localStorage.getItem('product-name');
        let localStateCartQuantity = localStorage.getItem('product-quentity');
        let localStateCartPrice = localStorage.getItem('product-price');
        let localStateCartImg = localStorage.getItem('product-img');

        let idobj = JSON.parse(localStateCartId);
        let imgobj = JSON.parse(localStateCartImg);
        let nameobj = JSON.parse(localStateCartName);
        let quantityobj = JSON.parse(localStateCartQuantity);
        let priceobj = JSON.parse(localStateCartPrice);

        let arr_id = [];
        let arr_img = [];
        let arr_name = [];
        let arr_quantity = [];
        let arr_price = [];
        let total_price = 0;
        let total_quantity = 0;
        if (idobj) {
            await Object.values(idobj).map(function (key) {
                if (key !== "A") {
                    arr_id.push(key);
                    arr_img.push(imgobj[key]);
                    arr_name.push(nameobj[key]);
                    arr_quantity.push(quantityobj[key]);
                    total_quantity += quantityobj[key];
                    arr_price.push(priceobj[key]);
                    total_price += quantityobj[key] * priceobj[key];
                }
            });
            await setFoodid(arr_id);
            await setFoodimg(arr_img);
            await setFoodname(arr_name);
            await setFoodquantity(arr_quantity);
            await setFoodprice(arr_price);
        }
        console.log('name--->', arr_name)

    }
    useEffect(() => {
        init();
    }, [state['right']]);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const remove = (e) => {
        let localStateCartQuantity = localStorage.getItem('product-quentity');
        let localStateCartPrice = localStorage.getItem('product-price');

        let iddata = localStorage.getItem('product-id');
        let namedata = localStorage.getItem('product-name');
        let quantitydata = localStorage.getItem('product-quentity');
        let pricedata = localStorage.getItem('product-price');
        let imgdata = localStorage.getItem('product-img');

        if (iddata) {
            let obj0 = JSON.parse(iddata);
            let obj1 = JSON.parse(imgdata);
            let obj2 = JSON.parse(namedata);
            let obj3 = JSON.parse(quantitydata);
            let obj4 = JSON.parse(pricedata);
            if (obj0[e.target.id]) {
                delete obj0[e.target.id];
                delete obj1[e.target.id];
                delete obj2[e.target.id];
                delete obj3[e.target.id];
                delete obj4[e.target.id];
            }
            localStorage.setItem('product-id', JSON.stringify(obj0));
            localStorage.setItem('product-name', JSON.stringify(obj2));
            localStorage.getItem('product-quentity', JSON.stringify(obj3));
            localStorage.setItem('product-price', JSON.stringify(obj4));
            localStorage.setItem('product-img', JSON.stringify(obj1));
        }

        let total_quantity = 0;
        let total_price = 0;
        if (quantitydata) {
            let obj = JSON.parse(quantitydata);
            let quantityobj = JSON.parse(localStateCartQuantity);
            let priceobj = JSON.parse(localStateCartPrice);
            Object.keys(obj).map(function (key) {
                if (obj[key] !== "A") {
                    total_quantity += obj[key];
                    total_price += quantityobj[key] * priceobj[key];
                }
            });
            props.ChangeCount(total_quantity);
            // props.ChangePerCost(total_price);
        }
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <ListItem button key={'row'}>
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', padding: '5%', justifyContent: 'space-between' }}>
                    <ListItemText primary={"SHOPPING CART"} />
                    <CancelIcon style={{ width: '30%' }} />
                </div>
            </ListItem>
            <Divider />
            {
                Foodname.map((row, index) => (
                    <>
                        <ListItem button key={Foodid[index]}>
                            <ListItemIcon style={{ width: '100px', height: '100px' }} key={Foodid[index + 1]}>
                                <img src={Foodimg[index]} alt={Foodid[index]} style={{ width: '100%', borderRadius: '50%' }} key={Foodid[index + 2]} />
                            </ListItemIcon>
                            <ListItemText style={{ width: '100%', display: 'flex', flexWrap: 'wrap', padding: '5%', justifyContent: 'space-between' }} key={Foodid[index + 3]}>
                                <ListItemText primary={row} style={{ width: '100%' }} key={Foodid[index + 4]} />
                                <div style={{ display: 'flex' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap' }} key={Foodid[index + 6]}>
                                        <ListItemText primary={"Store: " + Foodname[index]} style={{ width: '100%' }} key={Foodid[index + 5]} />
                                        <ListItemText primary={Foodquantity[index] + " × " + Foodprice[index] + " SEK"} style={{ width: '70%' }} key={Foodid[index + 7]} />
                                    </div>
                                    <img src="./images/assets/delete_icon.png" alt="delete_icon.png" style={{ width: 30, height: 30, cursor: 'pointer' }} id={Foodid[index]} onClick={remove} />
                                </div>
                            </ListItemText>
                        </ListItem>
                        <Divider key={Foodid[index + 9]} />
                    </>
                ))
            }
            {/* <ListItem button key={'row1'}>
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', padding: '5%', justifyContent: 'space-between' }}>
                    <ListItemText primary={"SUBTOTAL:"} />
                    <ListItemText primary={"123456 SEK"} style={{ width: '50%' }} />
                </div>
            </ListItem>
            <ListItem button key={'row2'}>
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', padding: '5%', justifyContent: 'space-between' }}>
                    <Button variant="outlined" style={{ backgroundColor: '#DD354D', margin: '1%', color: '#FCD652', width: '45%', borderRadius: '25px', border: '2px solid #DD354D' }} onClick={() => { console.log('view cart') }} type="submit">View Cart</Button>
                    <Button variant="outlined" style={{ backgroundColor: '#DD354D', margin: '1%', color: '#FCD652', width: '45%', borderRadius: '25px', border: '2px solid #DD354D' }} onClick={() => { console.log('checkout') }} type="submit">CheckOut</Button>
                </div>
            </ListItem> */}
            <Divider />
        </div >
    );

    return (
        <div>
            {/* <Backdrop /> */}
            {['right'].map((anchor) => (
                <React.Fragment key={1}>
                    <Button onClick={toggleDrawer(anchor, true)} id="btn_cartDrawer" style={{ display: 'none' }} key={2}>{anchor}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} key={3}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}


function mapStateToProps(state) {
    return {
        count: state.total_count
    };
}
const mapDispatchToProps = {
    ChangeCount
};
export default connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer);