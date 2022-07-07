import React, { useEffect, useState } from 'react'
import { getCurrentProductData } from '../Redux/Products/action'
import { useDispatch, useSelector } from 'react-redux'
import { Text, Grid, GridItem, Flex, Box, HStack, Button } from '@chakra-ui/react';
import Filter from '../components/Filter';
import Product from '../components/Product';
import { useParams } from 'react-router-dom';
import { addToCart } from '../Redux/Cart/action';


export default function ProductDetails() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.product.loading)
    const error = useSelector((state) => state.product.error)
    const currentProduct = useSelector((state) => state.product.currentProduct)
    const { id } = useParams()
    // console.log(products)
    // get data from action 
    const [size, setSize] = useState(null)
    useEffect(() => {
        if (id) {
            dispatch(getCurrentProductData(id))
        }
    }, [dispatch, id])

    const handleCart = () => {
        let payload = {
            ...currentProduct,
            size
        }
        console.log(payload)
        dispatch(addToCart(payload))
    }

    // console.log(product)
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Something went wrong</h1>
    }
    if (Object.keys(currentProduct).length === 0) {
        return <h2>Product {id} not found</h2>
    }
    return (
        <Flex justify="center" align="center">
            <Product product={currentProduct} />
            <Box>
                <Text as="em">Choose a Size</Text>
                <HStack padding={4}>
                    {
                        currentProduct.sizes.map((size) => {
                            return <Button onClick={() => {
                                setSize(size)
                            }} key={size} >{size}</Button>
                        })
                    }
                </HStack>
                <Button bg="yellow" color="black" disabled={!size} m={5} p={8} onClick={handleCart}>
                    {!size ? "Select Size" : "Add To Cart"}
                </Button>
            </Box>
        </Flex>
    )
}
