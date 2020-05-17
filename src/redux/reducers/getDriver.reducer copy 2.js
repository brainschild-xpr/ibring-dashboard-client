// import { GET_DRIVERS_PENDING, GET_DRIVERS_SUCCESS, GET_DRIVERS_ERROR } from '../actions/types'

// const initialState = {
//     drivers: [
//         { name: 'Martin', job: 'Developer' },
//         { name: 'Benta', job: 'Journalist' },
//         { name: 'Josephyn', job: 'Business Lady' }
//     ],
//     loading: false,
//     error: null
// }

// export function driverReducer(state = initialState, action) {
//     switch (action.type) {
//         case GET_DRIVERS:
//             return {
//                 ...state,
//                 drivers: action.payload,
//                 loading: false
//             }
//         case ADD_DRIVER:
//             return {
//                 ...state,
//                 drivers: [action.payload, ...state.drivers]
//             }
//         case DELETE_DRIVER:
//             return {
//                 ...state,
//                 drivers: state.drivers.filter(driver => driver.id !== action.payload)
//             }
//         case DRIVERS_LOADING:
//             return {
//                 ...state,
//                 loading: true
//             }
//         default:
//             return {
//                 ...state
//             }
//     }
// }

// export const getDrivers = state => state.drivers;
// export const getDriversLoading = state => state.loading;
// export const getDriversError = state => state.error;

