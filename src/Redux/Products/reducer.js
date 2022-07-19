import { FETCH_DATA_LOADING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, PRODUCT_LOADING, PRODUCT_SUCCESS, PRODUCT_ERROR, CURRENT_PRODUCT_LOADING, CURRENT_PRODUCT_SUCCESS, CURRENT_PRODUCT_ERROR } from "./actionTypes"

const initState = {
    loading: "false",
    error: "false",
    products: [],
    currentProduct: {}
}

const productReducer = (state = initState, action) => {
    switch (action.type) {

        case FETCH_DATA_LOADING:
            return { ...state, loading: true, error: false }

        case FETCH_DATA_ERROR:
            return {
                ...state, error: action.payload, loading: false
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state, products: action.payload, error: false, loading: false
            }

        case PRODUCT_LOADING:
            return { ...state, loading: true }
        // return { loading: false, error: false, products: [], loading: true }
        case PRODUCT_ERROR:
            return { ...state, loading: false, error: true }

        case PRODUCT_SUCCESS:
            return { ...state, loading: false, error: false, products: action.payload }

        // for single product

        case CURRENT_PRODUCT_LOADING:
            return { ...state, loading: true }

        case CURRENT_PRODUCT_ERROR:
            return { ...state, loading: false, error: true }

        case CURRENT_PRODUCT_SUCCESS:
            return { ...state, loading: false, error: false, currentProduct: action.payload }

        default:
            return state;
    }
}

export { productReducer }