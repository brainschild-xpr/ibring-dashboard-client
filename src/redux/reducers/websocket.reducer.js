import actionType from '../actionTypes/types'

const initialState = {
    socketState: [],
    websocketLoading: true,
    websocketError: null
}

export function websocketReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.GET_WS_LOADING:
            return {
                ...state,
                websocketLoading: true
            }
        case actionType.GET_WS_SUCCESS:
            return {
                ...state,
                websocketLoading: false,
                socketState: action.payload
            }
        case actionType.GET_WS_ERROR:
            return {
                ...state,
                websocketLoading: false,
                websocketError: action.error
            }
        default:
            return {
                ...state
            }
    }
}

