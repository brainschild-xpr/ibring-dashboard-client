// import { GET_DRIVERS, ADD_DRIVER, DELETE_DRIVER, DRIVERS_LOADING } from './types'

// import axios from 'axios'

// // export const getDrivers = () => dispatch => {
// //     dispatch(setDriversLoading())
// //     axios
// //         .get('/getDrivers/').then(
// //             response => {
// //                 dispatch({
// //                     type: GET_DRIVERS,
// //                     payload: response.data
// //                 })
// //                 console.log(response.data);
// //             }
// //         )
// // }
// export const getDriversLoading = () => {
//     return {
//         type: DRIVERS_LOADING
//     }
// }

// export const getDrivers = (drivers) => {
//     return {
//         type: GET_DRIVERS,
//         payload: drivers
//     }
// }

// export const addDriver = (driver) => {
//     return {
//         type: ADD_DRIVER,
//         payload: driver
//     }
// }

// export const deleteDriver = id => {
//     return {
//         type: DELETE_DRIVER,
//         payload: id
//     }
// }