const handleLoading = () => ({
    type: "IS_LOADING"
})

const handleError = () => ({
    type: "IS_ERROR"
})

const storeData = (payload) => ({
    type: "STORE_DATA",
    payload
})


export { storeData, handleError, handleLoading }