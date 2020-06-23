// import { GET_DRIVERS_LOADING, GET_DRIVERS_SUCCESS, GET_DRIVERS_ERROR } from './types'

import actionType from '../actionTypes/types'
import axios from 'axios'

export const getDrivers = () => dispatch => {
    console.log('Get Drivers has been dispatched');

    dispatch(getDriversLoading())
    axios
        .get('/API/getDrivers/').then(
            res => {
                console.log(res.data);

                if (res.error) {
                    throw (res.error)
                }

                dispatch(getDriversSuccess(res.data))

                console.log(res.data);
            }
        )
        .catch(error => {
            dispatch(getDriversError(error))
        })
}

export const getDriversLoading = () => {
    return {
        type: actionType.GET_DRIVERS_LOADING
    }
}

export const getDriversSuccess = (drivers) => {
    return {
        type: actionType.GET_DRIVERS_SUCCESS,
        payload: drivers
    }
}

export const getDriversError = (error) => {
    return {
        type: actionType.GET_DRIVERS_ERROR,
        error: error
    }
}