import React, { Component } from 'react'
// import { w3cwebsocket } from 'websocket'
// import { client } from 'websocket'
// // var ConnectedClient = client()
// console.log(client.toString)


import { connect } from 'react-redux'

// import { WelcomeUsers } from '../welcome.react';
import { MDBanner } from '../Banner/medium.banner.react';
// import { SideBar } from '../Sidebar/sidebar';
import { NavBar } from '../NavBar/navbar.react';
import { getDrivers } from '../../redux/actions/getDriver.action'
import { getPostedOrders } from '../../redux/actions/getPostedOrders.action'
import { getConfirmedOrders } from '../../redux/actions/getConfirmedOrders.action'
import { getActivityLogAll } from "../../redux/actions/activity.action";
// import { getWebsocketSuccess } from "../../redux/actions/websocket.action";
// import PropTypes from 'prop-types'
// import { increment, decrement } from '../../redux/actions/counter.action';
// import Counter from '../Counter/counter';

// const wsServer = w3cwebsocket('ws://192.168.43.241:12345')


class HomeDashBoard extends Component {
    componentDidMount() {
        // this.props.getActivityLogAll();
        this.props.getDrivers();
        // this.props.getPostedOrders();
        // this.props.getConfirmedOrders()

    }

    render() {
        // console.log('Props For Dashboard: \n', this.props);
        const { drivers, driverLoading, driverError } = this.props.driver;
        // const { activity } = this.props.activity
        // const loading = false
        const { postedOrders
            // , postedLoading, postedError 
        } = this.props.posted;
        // console.log(postedError, postedLoading);

        const { confirmedOrders
            // , confirmedLoading, confirmedError 
        } = this.props.confirmed;
        // console.log(confirmedError, confirmedLoading);



        const DriverList = drivers.map(({ id, uid, firstName, secondName }) => (
            <div className=' flex-col bg-gray-400 w-full' key={uid}>
                <div className='flex-1  text-gray-700 text-center bg-gray-300 px-0 py-2 m-2'>
                    {firstName} {secondName} {uid}
                </div>
            </div>
        ))

        // const DriverList = drivers.map(driver => (
        //   <div className=' flex-col bg-gray-400' key={driver.id}>
        //     <div className='flex-1  text-gray-700 text-center bg-gray-300 px-4 py-2 m-2' >
        //       {driver.name} {driver.job}
        //     </div>
        //   </div>
        // ))

        const DataAvailable =
            <div>
                <NavBar title='DashBoard' />
                <MDBanner
                    drivers={drivers.length}
                    postedOrders={postedOrders.length}
                    confirmedOrders={confirmedOrders.length} />
                {/* <Counter /> */}
            </div>

        return (
            driverLoading
                ?
                <div className="loader center  ">
                    <i className="fa fa-cog fa-spin" />
                </div>

                :
                driverError === null
                    ?
                    <div className='bg-gray-400 h-full'>
                        {DataAvailable}

                        <div className='flex flex-row'>
                            <div className='w-1/2 m-1'>
                                {DriverList}
                            </div>
                            <div className='w-1/2 m-1'>
                                {DriverList}
                            </div>



                        </div>
                    </div>
                    :
                    <div>
                        {/* <div className="center">
                            <i className="fa fa-cog fa-spin " />
                        </div> */}
                        <div className='self-center'>
                            {/* <span>ErrorName: {error.name}</span><br /> */}
                            <NavBar title={driverError.message} />
                            {/* <span>ErrorMessage: {error.message}</span><br /> */}
                            <span>ErrorStack: {driverError.stack}</span>
                        </div>

                    </div>
        );

    }
}

// HomeDashBoard.propTypes = {
//     getDrivers: PropTypes.func.isRequired,
//     driver: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
    driver: state.driver,
    websocket: state.websocket,
    posted: state.posted,
    confirmed: state.confirmed,
    activity: state.activity
})

export default connect(mapStateToProps, { getDrivers, getPostedOrders, getConfirmedOrders, getActivityLogAll })(HomeDashBoard)
