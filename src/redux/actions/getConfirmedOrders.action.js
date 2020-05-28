import actionType from '../actionTypes/types'

import axios from 'axios'

export const getConfirmedOrders = () => dispatch => {
    dispatch(setConfirmedOrdersLoading())
    axios
        .get('/API/getConfirmedOrders/').then(
            res => {
                console.log(res.data);

                if (res.error) {
                    throw (res.error)
                }

                dispatch(
                    getConfirmedOrdersSuccess(res.data)
                )

                console.log(res.data);
            })
        .catch(error => {
            dispatch(getConfirmedOrdersError(error))
        })
}


export const setConfirmedOrdersLoading = () => {
    return {
        type: actionType.GET_CONFIRMED_ORDERS_LOADING
    }
}

export const getConfirmedOrdersSuccess = (ConfirmedOrders) => {
    return {
        type: actionType.GET_CONFIRMED_ORDERS_SUCCESS,
        payload: ConfirmedOrders
    }
}

export const getConfirmedOrdersError = (error) => {
    return {
        type: actionType.GET_CONFIRMED_ORDERS_ERROR,
        error: error
    }
}