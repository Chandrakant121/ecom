import React from 'react'
import { useSelector } from 'react-redux'


export default function Homepage() {

    const data = useSelector((state) => state.products)
    console.log(data)
    //Store is empty in console 

    return (
        <div>Homepage</div>
    )
}
