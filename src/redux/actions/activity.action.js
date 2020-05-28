import actionType from '../actionTypes/types'

import axios from 'axios'

export const getActivityLogAll = () => dispatch => {
    dispatch(setActivityDataLoading())
    axios
        .get('/API/ActivityLog/').then(
            res => {
                console.log(res.data);

                if (res.error) {
                    throw (res.error)
                }

                dispatch(
                    getActivityLogSuccess(res.data)
                )

                console.log(res.data);
            })
        .catch(error => {
            dispatch(getActivityLogError(error))
        })
}

export const getActivityLogUid = (uid) => dispatch => {
    dispatch(setActivityDataLoading())
    axios
        .get('/API/ActivityLog/' + uid).then(
            res => {
                console.log(res.data);

                if (res.error) {
                    throw (res.error)
                }

                dispatch(
                    getActivityLogSuccess(res.data)
                )

                console.log(res.data);
            })
        .catch(error => {
            dispatch(getActivityLogError(error))
        })
}


export const setActivityDataLoading = () => {
    return {
        type: actionType.GET_ACTIVITY_LOADING
    }
}

export const getActivityLogSuccess = (activityData) => {
    return {
        type: actionType.GET_ACTIVITY_SUCCESS,
        payload: activityData
    }
}

export const getActivityLogError = (error) => {
    return {
        type: actionType.GET_ACTIVITY_ERROR,
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