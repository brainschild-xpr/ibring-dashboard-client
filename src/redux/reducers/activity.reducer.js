import actionType from '../actionTypes/types'

const initialState = {
    activity: [],
    activityLoading: false,
    activityError: null
}

export function activityLogReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.GET_ACTIVITY_LOADING:
            return {
                ...state,
                activityLoading: true
            }
        case actionType.GET_ACTIVITY_SUCCESS:
            return {
                ...state,
                activityLoading: false,
                activity: action.payload
            }
        case actionType.GET_WS_ERROR:
            return {
                ...state,
                activityLoading: false,
                activityError: action.error
            }
        default:
            return {
                ...state
            }
    }
}

// export const getactivitySuccess = state => state.posted;
// export const getactivityLoading = state => state.postedLoading;
// export const getactivityError = state => state.error;

