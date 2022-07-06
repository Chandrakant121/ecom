import React, { useEffect } from 'react'
import { handleLoading, handleError, storeData, getData } from '../Redux/Products/action'
import { useDispatch } from 'react-redux'


export default function Shoppage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div>Shop page</div>
    )
}
