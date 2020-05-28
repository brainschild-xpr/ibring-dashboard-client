import actionType from '../actionTypes/types'

import axios from 'axios'

export const getPostedOrders = () => dispatch => {
    dispatch(setPostedOrdersLoading())
    axios
        .get('/API/getPostedOrders/').then(
            res => {
                console.log(res.data);

                if (res.error) {
                    throw (res.error)
                }

                dispatch(
                    getPostedOrdersSuccess(res.data)
                )

                console.log(res.data);
            })
        .catch(error => {
            dispatch(getPostedOrdersError(error))
        })
}


export const setPostedOrdersLoading = () => {
    return {
        type: actionType.GET_POSTED_ORDERS_LOADING
    }
}

export const getPostedOrdersSuccess = (postedOrders) => {
    return {
        type: actionType.GET_POSTED_ORDERS_SUCCESS,
        payload: postedOrders
    }
}

export const getPostedOrdersError = (error) => {
    return {
        type: actionType.GET_POSTED_ORDERS_ERROR,
        error: error
    }
}

// export const getDrivers = (drivers) => {
//     return {
//         type: GET_DRIVERS,
//         payload: drivers
//     }
// }

// export const addDriver = (driver) => {
//     return {
//         type: ADD_DRIVER,
//         payload: driver
//     }
// }

// export const deleteDriver = id => {
//     return {
//         type: DELETE_DRIVER,
//         payload: id
//     }
// }