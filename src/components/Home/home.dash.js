import React, { Component } from 'react'

import { connect } from 'react-redux'

import { WelcomeUsers } from '../welcome.react';
import { MDBanner } from '../Banner/medium.banner.react';
import { SideBar } from '../Sidebar/sidebar';
import { NavBar } from '../NavBar/navbar.react';
import { getDrivers } from '../../redux/actions/getDriver.action'
import PropTypes from 'prop-types'

class HomeDashBoard extends Component {

    componentDidMount() {
        this.props.getDrivers()
    }

    render() {
        console.log(this.props);
        // const { drivers } = this.props
        const { drivers, loading, error } = this.props.driver;
        // console.log(drivers);


        const DriverList = drivers.map(({ id, uid, firstName, secondName }) => (
            <div className=' flex-col bg-gray-400' key={uid}>
                <div className='flex-1  text-gray-700 text-center bg-gray-300 px-4 py-2 m-2'>
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

        return (
            loading
                ?
                <div>
                    <span>
                        Loading
            </span>
                </div>

                :
                error === null
                    ?

                    <div className='bg-gray-400'>
                        {/* <SideBar /> */}

                        {/* <WelcomeUsers /> */}

                        {/* <div className=' flex flex-row md:justify-end h-auto'> */}
                            {/* <div className='sm:w-10/12'> */}
                                <NavBar title='DashBoard'/>
                                <MDBanner drivers={drivers.length}/>
                                {DriverList}


                            {/* </div> */}
                        {/* </div> */}

                    </div>

                    :
                    <div className='self-center'>
                        <span>ErrorName: {error.name}</span><br />
                        <span>ErrorMessage: {error.message}</span><br />
                        {/* <span>ErrorStack: {error.stack}</span> */}
                    </div>
        );
    }
}

HomeDashBoard.propTypes = {
    getDrivers: PropTypes.func.isRequired,
    driver: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    driver: state.driver
})

export default connect(mapStateToProps, { getDrivers })(HomeDashBoard)
