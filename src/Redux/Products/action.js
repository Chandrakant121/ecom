import { FETCH_DATA_LOADING, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, PRODUCT_LOADING, PRODUCT_SUCCESS, PRODUCT_ERROR, CURRENT_PRODUCT_LOADING, CURRENT_PRODUCT_SUCCESS, CURRENT_PRODUCT_ERROR } from "./actionTypes"
import Axios from "axios"


const handleLoading = () => ({
    type: PRODUCT_LOADING
})

const handleError = () => ({
    type: PRODUCT_ERROR
})

const handleSuccess = (payload) => ({
    type: PRODUCT_SUCCESS,
    payload
})

const getData = () => (dispatch) => {
    dispatch(handleLoading())
    fetch("http://localhost:8080/products")
        .then((res) => res.json())
        .then((res) => dispatch(handleSuccess(res)))
        .catch(() => dispatch(handleError()))
}

// for single product

const handleCurrentProductLoading = () => ({
    type: CURRENT_PRODUCT_LOADING
})

const handleCurrentProductError = () => ({
    type: CURRENT_PRODUCT_ERROR
})

const handleCurrentProductSuccess = (payload) => ({
    type: CURRENT_PRODUCT_SUCCESS,
    payload
})

const getCurrentProductData = (id) => (dispatch) => {
    dispatch(handleCurrentProductLoading())
    fetch(`http://localhost:8080/products/${id}`)
        .then((res) => res.json())
        .then((res) => dispatch(handleCurrentProductSuccess(res)))
        .catch(() => dispatch(handleCurrentProductError()))
}


//fetch data
const fetchDataLoading = (payload) => {
    return {
        type: FETCH_DATA_LOADING,
        payload
    }
}
const fetchDataSuccess = (payload) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    }
}
const fetchDataError = (payload) => {
    return {
        type: FETCH_DATA_ERROR,
        payload
    }
}

const fetchData = (payload) => {
    return (dispatch) => {
        dispatch(fetchDataLoading())
        Axios.get("http://localhost:8080/products/", { params: { ...payload } })
            .then((res) => { return dispatch(fetchDataSuccess(res.data)) })
            .catch((err) => { return dispatch(fetchDataError(err.data)) })
    }

}


export { fetchData, getData, getCurrentProductData }