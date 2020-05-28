import React, { Component } from 'react'
import { connect } from 'react-redux'

// import PropTypes from 'prop-types'
import { getDrivers } from "../../../redux/actions/getDriver.action";

export class RiderBanner extends Component {
    componentDidMount() {
        getDrivers();
    }
    render() {
        console.log('Props For Rider: \n', this.props);
        const { number } = this.props
        const online = 0
        const onDelivery = 0
        return (
            <div className=''>
                <div className='bg-teal-600 rounded-lg'>
                    <div className='flex flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user stroke-current text-teal-400 w-16 m-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <div className='p-6'>
                            <h1 className='text-lg text-teal-400 font-bold'>Riders</h1>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col text-lg pt-1'>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-teal-900'>Riders :</h1>
                        <h1 className='text-teal-900'>{number}</h1>
                    </div>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-teal-900'>Online :</h1>
                        <h1 className='text-teal-900'>{online}</h1>
                    </div>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-teal-900'>On Delivery :</h1>
                        <h1 className='text-teal-900'>{onDelivery}</h1>
                    </div>
                </div>
            </div>

        )
    }
}

// RiderBanner.propTypes = {
//     getDrivers: PropTypes.func.isRequired,
//     driver: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
    driver: state.driver,
})

export default connect(mapStateToProps, { getDrivers })(RiderBanner)
