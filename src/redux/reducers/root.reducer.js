// const initialState = {
//     drivers: [
//         { id: 1, fname: 'Martin', sname: 'Shungoh', mode: 'Motorcycle' },
//         { id: 2, fname: 'Bene', sname: 'Shungoh', mode: 'Small Car' },
//         { id: 3, fname: 'Cate', sname: 'Shungoh', mode: 'Jeep' },
//         { id: 4, fname: 'Phynee', sname: 'Shungoh', mode: 'Noah' },
//         { id: 5, fname: 'Martin', sname: 'Shungoh', mode: 'Motorcycle' },
//         { id: 6, fname: 'Bene', sname: 'Shungoh', mode: 'Small Car' },
//         { id: 7, fname: 'Cate', sname: 'Shungoh', mode: 'Jeep' },
//         { id: 8, fname: 'Phynee', sname: 'Shungoh', mode: 'Noah' }
//     ],
//     orders: [],
//     clients: [],
//     locations: []
// }

// const rootReducer = (state = initialState, action) => {
//     // console.log(state)
//     return state
// }

// export default rootReducer

import { combineReducers } from 'redux'

import { driverReducer } from './getDriver.reducer'
import { confirmedOrderReducer } from "./getConfirmedOrder.reducer";
import { postedOrderReducer } from './getPostedOrder.reducer'
import { websocketReducer } from './websocket.reducer'
import { activityLogReducer } from "./activity.reducer";

export default combineReducers({
    driver: driverReducer,
    websocket: websocketReducer,
    posted: postedOrderReducer,
    confirmed: confirmedOrderReducer,
    activity: activityLogReducer
})