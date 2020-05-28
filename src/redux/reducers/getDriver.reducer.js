import actionType from '../actionTypes/types'

const initialState = {
    drivers: [],
    driverLoading: true,
    driverError: null
}

export function driverReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.GET_DRIVERS_LOADING:
            return {
                ...state,
                driverLoading: true
            }
        case actionType.GET_DRIVERS_SUCCESS:
            return {
                ...state,
                driverLoading: false,
                drivers: action.payload
            }
        case actionType.GET_DRIVERS_ERROR:
            return {
                ...state,
                driverLoading: false,
                driverError: action.error
            }

        default:
            return {
                ...state
            }
    }
}

// export const getDriversSuccess = state => state.drivers;
// export const getDriversError = state => state.error;
// export const getDriversLoading = state => state.Loading;


