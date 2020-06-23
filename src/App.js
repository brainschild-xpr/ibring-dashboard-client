import React, { Component } from 'react'


// import HomeDashBoard from './componsents/Home/home.dash'
import SideBar from './components/Sidebar/sidebar'
// import { NavBar } from './components/NavBar/navbar.react'
// import { MDBanner } from './components/Banner/medium.banner.react'
import RoutePages from './components/Routing/route'

import { w3cwebsocket } from 'websocket'
import { getWebsocketSuccess, setWebsocketLoading } from "./redux/actions/websocket.action";
import { getActivityLogAll, getActivityLogSuccess } from "./redux/actions/activity.action";
import { connect } from 'react-redux';
import ActivityLog from './components/ActivityLog';
const wsServer = w3cwebsocket('ws://192.168.43.35:12345')




export class App extends Component {

    componentDidMount() {
        this.props.getActivityLogAll();
        // this.props.getDrivers();
        // this.props.getPostedOrders();
        // this.props.getConfirmedOrders()

    }
    UNSAFE_componentWillMount() {
        wsServer.onopen = () => {
            console.log('Websocket Connected');
            this.props.setWebsocketLoading()
        }
        wsServer.onmessage = (message) => {
            const data = JSON.parse(message.data)
            console.log(' ');

            console.log(data);
            console.log(' ');

            switch (data.action) {
                case 'request':
                    console.log(data.connectionID);
                    wsServer.send(
                        JSON.stringify(
                            {
                                action: 'connectDashboard',
                                driverUID: 'react-front-end'
                            }
                        )
                    )
                    break;
                case 'connectAppEvent':
                    console.log('DashBoard Connected');
                    this.props.getWebsocketSuccess(data)
                    wsServer.send(
                        JSON.stringify(
                            {
                                action: 'status',
                                id: data.connectionID
                            }
                        )
                    )
                    break;

                case 'dashboardConnected':
                    console.log('DashBoard Connected', data);
                    this.props.getWebsocketSuccess(data)
                   this.props.getActivityLogAll()
                    wsServer.send(
                        JSON.stringify(
                            {
                                action: 'status',
                                id: data.connectionID
                            }
                        )
                    )
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        const { activity } = this.props.activity
        return (
            <div className='flex'>
                <div className='lg:w-2/12 hidden lg:block'>
                    <SideBar />
                </div>

                <div className='lg:w-8/12 md:w-full'>

                    {/* <MDBanner /> */}
                    <RoutePages />
                    {/* <div className='flex bg-teal-600 rounded-lg my-2'>
                        <div className='bg-orange-600 h-63M w-1/2 ml-2 mr-1 my-2 px-6 py-10 rounded-lg'>
                            Middle
                        </div>
                        <div className='bg-orange-600 h-63M w-1/2 ml-1 mr-2 my-2 px-6 py-10 rounded-lg'>
                            Middle</div>
                    </div> */}
                </div>
                <div className='lg:w-2/12 hidden lg:block'>
                    <ActivityLog activity={activity} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    driver: state.driver,
    posted: state.posted,
    websocket: state.websocket,
    activity: state.activity
})

export default connect(mapStateToProps, { getWebsocketSuccess, setWebsocketLoading, getActivityLogAll, getActivityLogSuccess })(App)












// import React, { Component } from 'react';

// import { connect } from 'react-redux'

// // import LogRocket from 'logrocket'
// // LogRocket.init('keubzn/ibring_logs')
// // LogRocket.identify('matt')
// import { getDrivers } from './redux/actions/getDriver.action'
// import PropTypes from 'prop-types'

// class App extends Component {

//   componentDidMount() {
//     this.props.getDrivers()
//   }

//   render() {
//     console.log(this.props);
//     // const { drivers } = this.props
//     const { drivers, loading, error } = this.props.driver;
//     // console.log(drivers);


//     const DriverList = drivers.map(({ id, uid, firstName, secondName }) => (
//       <div className=' flex-col bg-gray-400' key={uid}>
//         <div className='flex-1  text-gray-700 text-center bg-gray-300 px-4 py-2 m-2'>
//           {firstName} {secondName} {uid}
//         </div>
//       </div>
//     ))

//     // const DriverList = drivers.map(driver => (
//     //   <div className=' flex-col bg-gray-400' key={driver.id}>
//     //     <div className='flex-1  text-gray-700 text-center bg-gray-300 px-4 py-2 m-2' >
//     //       {driver.name} {driver.job}
//     //     </div>
//     //   </div>
//     // ))

//     return (
//       loading
//         ?
//         <div>
//           <span>
//             Loading
//           </span>
//         </div>

//         :
//         error === null
//           ?
//           <div className='bg-gray-300'>
//             {/* <NavBar /> */}
//             <div className='md:w-4/12 w-10M mx-auto fixed rounded-tr-lg rounded-br-lg mt-0'>
//               <div className='bg-gray-900 px-0 pt-0 h-95M rounded-tr-lg rounded-br-lg shadow-2xl border-r-0 border-teal-500 border-t-2'>

//                 <div className='flex flex-col h-90M justify-between'>
//                   <ul className=" ">
//                     {/* <SideBarTop /> */}
//                   </ul>
//                   <ul className=" ">
//                     {/* <SideBarBottom /> */}
//                   </ul>
//                 </div>

//               </div>
//             </div>

//             <div className=' flex flex-row md:justify-end h-auto mx-3'>
//               <div className='sm:w-5/6 w-90M'>
//                 {/* <MDBanner /> */}
//                 {/* <div className='overflow-auto h-63M mt-2'> */}

//                 <div className='flex bg-teal-600 rounded-lg my-2'>
//                   <div className='bg-orange-600 h-63M w-1/2 ml-2 mr-1 my-2 px-6 py-10 rounded-lg'>
//                     {DriverList}
//                   </div>
//                   <div className='bg-orange-600 h-63M w-1/2 ml-1 mr-2 my-2 px-6 py-10 rounded-lg'>
//                     Middle</div>
//                 </div>

//               </div>
//               {/* </div> */}


//               {/* <div className='flex flex-col w-1/6 md:hidden lg:block'>
//           <div className='bg-gray-500 p-6 m-2 h-31M rounded-lg shadow-xl'>
//             Right
//           </div>
//           <div className='bg-gray-500 p-6 m-2 mt-0 h-31M rounded-lg shadow-xl'>
//             Right
//           </div>
//           <div className='bg-gray-500 p-6 m-2 mt-0 h-31M rounded-lg shadow-xl'>
//             Right
//           </div>
//         </div> */}

//             </div >
//           </div>
//           :
//           <div className='self-center'>
//             <span>ErrorName: {error.name}</span><br/>
//             <span>ErrorMessage: {error.message}</span><br/>
//             {/* <span>ErrorStack: {error.stack}</span> */}
//           </div>
//     );
//   }
// }

// App.propTypes = {
//   getDrivers: PropTypes.func.isRequired,
//   driver: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//   driver: state.driver
// })

// export default connect(mapStateToProps, { getDrivers })(App)



// // {/* <section className='w-1/6'>
// //               <div className='bg-gray-500 p-6 m-2 h-64 rounded-lg shadow-xl'>
// //                 Right
// //             </div>
// //             </section> 

// // <section className='lg:w-auto'>
// //             <div className='bg-gray-500 h-64'>
// //               <p>Hello</p>
// //             </div>
// //           </section>  */}
//     // <div className='flex flex row mt-2'>
//     //       <div className="w-full bg-gray-400 h-16"></div>
//     //     </div>
//       // <div className='grid gap-0 grid-cols-3'>
//       //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
//       //     1
//       //   </div>
//       //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
//       //     2
//       //   </div>
//       //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
//       //     3
//       //   </div>
//       //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
//       //     4
//       //   </div>
//       //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
//       //     5
//       //   </div>
//       //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
//       //     6
//       //   </div>
//       //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
//       //     7
//       //   </div>
//       //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
//       //     8
//       //   </div>
//       //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
//       //     9
//       //   </div>
//       // </div>

//     //   <div className="flex m-1 mt-2">
//     //   <div className="w-1/4 bg-gray-500 h-48 mr-2"></div>
//     //   <div className="w-1/4 bg-gray-400 h-48 mr-2"></div>
//     //   <div className="w-1/4 bg-gray-500 h-48 mr-2"></div>
//     //   <div className="w-1/4 bg-gray-400 h-64"></div>
//     // </div>



//     // <div className=' w-3/4'>
//     //         <div className="w-1/3 bg-gray-500 h-48 mr-2"></div>
//     //         <div className="w-1/3 bg-gray-400 h-48 mr-2"></div>
//     //         <div className="w-1/3 bg-gray-600 h-48 mr-2"></div>
//     //       </div>
//     //       <div className='w-1/4'>
//     //         <div className="bg-gray-700 h-auto mr-2"></div>
//     //       </div>


//   //   <div className='flex flex-col'>
//   //   <div className='flex flex-row h-64'>
//   //     <div className="w-1/4 bg-gray-500 h-48 mr-2"></div>
//   //     <div className="w-1/4 bg-gray-400 h-48 mr-2"></div>
//   //     <div className="w-1/4 bg-gray-500 h-48 mr-2"></div>
//   //     <div className="w-1/4 bg-gray-500 h-full mr-2"></div>
//   //   </div>

//   //   <div className='flex flex-row h-64'>
//   //     <div className="w-1/4 bg-gray-500 h-48 mr-2"></div>
//   //     <div className="w-1/4 bg-gray-400 h-48 mr-2"></div>
//   //     <div className="w-1/4 bg-gray-500 h-48 mr-2"></div>
//   //     <div className="w-1/4 bg-gray-500 h-full mr-2"></div>
//   //   </div>

//   //   <div className='flex-1 text-gray-700 text-center bg-gray-300 p-5 m-2'>
//   //     2
//   //   </div>
//   //   <div className='flex-1 text-gray-700 text-center bg-gray-300 p-5 m-2'>
//   //     2
//   //   </div>
//   // </div>