import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from "@chakra-ui/react"

import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";



export default function Homepage() {

    const data = useSelector((state) => state.products)
    console.log(data)
    //Store is empty in console 

    return (
        <Box w="100%" p={4} color="white" >
            <ImageSlider slides={SlideData} />
        </Box>
    )
}
