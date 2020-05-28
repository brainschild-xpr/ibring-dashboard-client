// import { GET_DRIVERS_LOADING, GET_DRIVERS_SUCCESS, GET_DRIVERS_ERROR } from './types'

import actionType from '../actionTypes/types'

// import axios from 'axios'
// import { w3cwebsocket } from 'websocket'
// const wsServer = w3cwebsocket('ws://192.168.43.241:12345')

// export const connectWebsocket = () => dispatch => {
//     console.log('Connect Websocket has been dispatched');

//     dispatch(setWebsocketLoading())
//     wsServer.onopen = () => {
//         console.log('Websocket Connected');
//     }
//     wsServer.onmessage = (message) => {
//         const data = JSON.parse(message.data)
//         console.log(data);

//         switch (data.action) {
//             case 'request':
//                 dispatch(getWebsocketSuccess(data))
//                 console.log(data.connectionID);
//                 wsServer.send(
//                     JSON.stringify(
//                         {
//                             action: 'connectDashboard',
//                             driverUID: 'react-front-end'
//                         }
//                     )
//                 )
//                 break;
//             case 'dashboardConnected':
//                 dispatch(getWebsocketSuccess(data))
//                 console.log('DashBoard Connected');
//                 // wsServer.send(
//                 //     JSON.stringify(
//                 //         {
//                 //             action: 'status',
//                 //             id: data.connectionID
//                 //         }
//                 //     )
//                 // )
//                 break;
//             default:
//                 break;
//         }
//     }
// }

export const setWebsocketLoading = () => {
    return {
        type: actionType.GET_WS_LOADING
    }
}

export const getWebsocketSuccess = (socket) => {
    return {
        type: actionType.GET_WS_SUCCESS,
        payload: socket
    }
}

export const getWebsocketError = (error) => {
    return {
        type: actionType.GET_WS_ERROR,
        error: error
    }
}