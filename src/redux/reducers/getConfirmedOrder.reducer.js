import actionType from '../actionTypes/types'

const initialState = {
    confirmedOrders: [],
    confirmedLoading: true,
    confirmedError: null
}

export function confirmedOrderReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.GET_CONFIRMED_ORDERS_LOADING:
            return {
                ...state,
                confirmedLoading: true
            }
        case actionType.GET_CONFIRMED_ORDERS_SUCCESS:
            return {
                ...state,
                confirmedLoading: false,
                confirmedOrders: action.payload
            }
        case actionType.GET_CONFIRMED_ORDERS_ERROR:
            return {
                ...state,
                confirmedLoading: false,
                confirmedError: action.error
            }
        default:
            return {
                ...state
            }
    }
}

// export const getconfirmedOrdersSuccess = state => state.confirmed;
// export const getconfirmedOrdersLoading = state => state.confirmedLoading;
// export const getconfirmedOrdersError = state => state.error;

