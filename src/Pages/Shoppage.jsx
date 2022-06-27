import React, { useEffect } from 'react'
import { handleLoading, handleError, storeData } from '../Redux/Products/action'
import { useDispatch } from 'react-redux'


export default function Shoppage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(handleLoading())
        fetch("http://localhost:8080/products")
            .then((res) => res.json())
            .then((res) => dispatch(storeData(res)))
            .catch(() => dispatch(handleError()))
    }, [])

    return (
        <div>Shop page</div>
    )
}
