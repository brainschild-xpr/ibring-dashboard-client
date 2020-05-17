import { GET_DRIVERS_LOADING, GET_DRIVERS_SUCCESS, GET_DRIVERS_ERROR } from '../actions/types'

const initialState = {
    drivers: [],
    loading: true,
    error: null
}

export function driverReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DRIVERS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_DRIVERS_SUCCESS:
            return {
                ...state,
                loading: false,
                drivers: action.payload
            }
        case GET_DRIVERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return {
                ...state
            }
    }
}

export const getDriversSuccess = state => state.drivers;
export const getDriversError = state => state.error;
export const getDriversLoading = state => state.loading;


