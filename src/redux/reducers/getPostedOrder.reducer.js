import actionType from '../actionTypes/types'

const initialState = {
    postedOrders: [],
    postedLoading: false,
    postedError: null
}

export function postedOrderReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.GET_POSTED_ORDERS_LOADING:
            return {
                ...state,
                postedLoading: true
            }
        case actionType.GET_POSTED_ORDERS_SUCCESS:
            return {
                ...state,
                postedLoading: false,
                postedOrders: action.payload
            }
        case actionType.GET_POSTED_ORDERS_ERROR:
            return {
                ...state,
                postedLoading: false,
                postedError: action.error
            }
        default:
            return {
                ...state
            }
    }
}

// export const getPostedOrdersSuccess = state => state.posted;
// export const getPostedOrdersLoading = state => state.postedLoading;
// export const getPostedOrdersError = state => state.error;

