import { getDriversSuccess, getDriversLoading, getDriversError } from '../actions/getDriver.action'
import axios from 'axios'

function fetchDrivers() {
    return dispatch => {
        dispatch(getDriversLoading());
        axios
            .get('/getDrivers/')
            .then(res => res.json())
            .then(res => {
                console.log(res.data);

                if (res.error) {
                    throw (res.error)
                }

                dispatch(getDriversSuccess(res.data))
                return res.data
            })
            .catch(error => {
                dispatch(getDriversError(error))
            })
    }
}

export default fetchDrivers