import React, { useEffect } from 'react';
import Styles from '../../assets/css/home_style.module.css'
import Card from '../../components/Common/Card';
import {
    Grid,
    FormControlLabel,
    Checkbox
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const items = [
    {
        id: '1',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '2',
        name: "Egg Balloon",
        category: "Food",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item2.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '3',
        name: "Egg Balloon1",
        category: "Food",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item2.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '4',
        name: "Man",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item3.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '5',
        name: "Architecture",
        category: "Landmarks",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item4.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '6',
        name: "Architecture1",
        category: "peopLandmarksle",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item4.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '7',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '8',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '9',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '10',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '11',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '12',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '13',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '14',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '15',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '16',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '17',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '18',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '19',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
    {
        id: '20',
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: [
            { src: "./images/assets/item1.png" },
            { alt: "aa" }
        ],
        bestseller: true,
        featured: false,
        details: null
    },
]

const Products = () => {
    const [products, setProducts] = React.useState([]);
    const [currentpage, setCurrentPage] = React.useState(1);

    const handleChangePage = (event, newPage) => {
        handleProductfilter(newPage)
        setCurrentPage(newPage)
    }

    useEffect(() => {
        handleProductfilter(currentpage);
    }, [items]);

    const handleProductfilter = (param) => {
        var data = []
        var first = 0;
        var last = 5;

        if (param !== 1) {
            first = (6 * (param - 1));
            last = (6 * param - 1);
        }

        items.map((val, index) => {
            if (index >= first && index <= last) {
                data.push(val)
            }
        })
        setProducts(data)
    }

    return (
        <Grid container className="container" >
            <Grid item xs={12} className={Styles.products_header}>
                <div style={{ display: 'flex' }}>
                    <div className={Styles.label30}>Photography / </div>
                    <div className={Styles.label30} style={{ color: '#9B9B9B', marginLeft: 10 }}>Premium Photos</div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className={Styles.label30}>Photography / </div>
                    <div className={Styles.label30} style={{ color: '#9B9B9B', marginLeft: 10 }}>Premium Photos</div>
                </div>
            </Grid>
            <Grid item xs={12} sm={2}>
                <div className={Styles.products_left_item_container}>
                    <div className={Styles.label22} style={{ marginBottom: 44 }}>Category</div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="people"
                                color="primary"
                            // checked={wednesday}
                            // onChange={() => { setWednesday(!wednesday) }}
                            />
                        }
                        className={`${Styles.combo_container} ${Styles.label22}`}
                        label="People"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="premium"
                                color="primary"
                            // checked={wednesday}
                            // onChange={() => { setWednesday(!wednesday) }}
                            />
                        }
                        className={`${Styles.combo_container} ${Styles.label22}`}
                        label="Premium"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="pets"
                                color="primary"
                            // checked={wednesday}
                            // onChange={() => { setWednesday(!wednesday) }}
                            />
                        }
                        className={`${Styles.combo_container} ${Styles.label22}`}
                        label="Pets"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="food"
                                color="primary"
                            // checked={wednesday}
                            // onChange={() => { setWednesday(!wednesday) }}
                            />
                        }
                        className={`${Styles.combo_container} ${Styles.label22}`}
                        label="Food"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="landmarks"
                                color="primary"
                            // checked={wednesday}
                            // onChange={() => { setWednesday(!wednesday) }}
                            />
                        }
                        className={`${Styles.combo_container} ${Styles.label22}`}
                        label="Landmarks"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="cities"
                                color="primary"
                            // checked={wednesday}
                            // onChange={() => { setWednesday(!wednesday) }}
                            />
                        }
                        className={`${Styles.combo_container} ${Styles.label22}`}
                        label="Cities"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="nature"
                                color="primary"
                            // checked={wednesday}
                            // onChange={() => { setWednesday(!wednesday) }}
                            />
                        }
                        className={`${Styles.combo_container} ${Styles.label22}`}
                        label="Nature"
                    />
                </div>

                <div>
                    <div className={Styles.label22} style={{ marginBottom: 44 }}>Price range</div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="lower"
                                color="primary"
                            // checked={wednesday}
                            // onChange={() => { setWednesday(!wednesday) }}
                            />
                        }
                        className={`${Styles.combo_container} ${Styles.label22}`}
                        label="Lower than $20"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="twenty"
                                color="primary"
                            // checked={wednesday}
                            // onChange={() => { setWednesday(!wednesday) }}
                            />
                        }
                        className={`${Styles.combo_container} ${Styles.label22}`}
                        label="$20 - $100"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="hundred"
                                color="primary"
                            // checked={wednesday}
                            // onChange={() => { setWednesday(!wednesday) }}
                            />
                        }
                        className={`${Styles.combo_container} ${Styles.label22}`}
                        label="$100 - $200"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="more"
                                color="primary"
                            // checked={wednesday}
                            // onChange={() => { setWednesday(!wednesday) }}
                            />
                        }
                        className={`${Styles.combo_container} ${Styles.label22}`}
                        label="More than $200"
                    />
                </div>
            </Grid>
            <Grid item xs={12} sm={10} className={Styles.card_container}>
                {
                    products.map((val, index) => {
                        return (
                            <div style={{ width: '30%' }} key={index}>
                                <Card item={val} />
                            </div>
                        )
                    })
                }
                <Grid item xs={12} sm={6} className={Styles.sortby}>
                    <Pagination
                        count={Math.ceil(items.length / 6)}
                        color="primary"
                        page={currentpage}
                        onChange={handleChangePage}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Products;