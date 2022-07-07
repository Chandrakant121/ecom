import React, { useEffect } from 'react'
import { getData } from '../Redux/Products/action'
import { useDispatch, useSelector } from 'react-redux'
import { Text, Grid, GridItem } from '@chakra-ui/react';
import Filter from '../components/Filter';
import Product from '../components/Product';


export default function Shoppage() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading)
    const error = useSelector((state) => state.error)
    const products = useSelector((state) => state.products)
    // console.log(products)
    // get data from action 
    useEffect(() => {
        if (products.length === 0) {
            dispatch(getData())
        }
    }, [dispatch, products.length])

    return (
        <div>
            <Text>Shop All</Text>
            <Filter></Filter>
            {
                loading ? <h1>Loading...</h1> : error ? <h2>Something went wrong, please try again</h2> :
                    <Grid templateColumns="repeat(3,1fr)" gap={6}>
                        {
                            products.length > 0 && products.map((product) => {
                                return <Product key={product.id} product={product} />
                            })
                        }
                    </Grid>
            }
        </div >
    )
}
