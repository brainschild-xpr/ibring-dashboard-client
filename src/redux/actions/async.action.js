export const CAT_NAMES = {
    START_FETCH: "CAT_NAMES_START_FETCH",
    FAIL_FETCH: "CAT_NAMES_FAIL_FETCH",
    FINISH_FETCH: "CAT_NAME_FINISH_FETCH"
};
export const startFetchCatNames = () => ({
    type: CAT_NAMES.START_FETCH
});
export const failFetchCatNames = error => ({
    type: CAT_NAMES.FAIL_FETCH,
    payload: error
});
export const finishFetchCatNames = data => ({
    type: CAT_NAMES.FINISH_FETCH,
    payload: data
});