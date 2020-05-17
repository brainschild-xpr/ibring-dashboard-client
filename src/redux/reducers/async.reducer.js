// const initalState = {
//     data: null,
//     isFetching: false,
//     error: null
// }

const initialState = {
    data: null,
    isFetching: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAT_NAMES.START_FETCH:
            return { ...state, isFetching: true };
        case CAT_NAMES.FINISH_FETCH:
            return { isFetching: false, data: action.payload, error: null };
        case CAT_NAMES.FAIL_FETCH:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
};