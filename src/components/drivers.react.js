import React, { Component } from 'react'
import { connect } from 'react-redux'

class Drivers extends Component {
    render() {
        console.log(this.props);
        const { drivers } = this.props
        console.log(drivers);
        const DriverList = drivers.map(driver => {
            return <div className='inline-flex bg-gray-400'>
                <div className='flex-1 text-gray-700 text-center bg-gray-300 px-4 py-2 m-2'>
                    {driver.fname}
                </div>
            </div>

        })

        return (
            <div>
                <h1 className='subtitle blue-text'>Nakuru</h1>
                {DriverList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        drivers: state.drivers
    }
}

export default connect(mapStateToProps)(Drivers)
    // <div className='collection-item' key={driver.id}>
            //     <span className=''>
            //         {driver.fname}
            //         {driver.sname}
            //         {driver.mode}
            //     </span>
            // </div>

            // <div className="md:flex">
            //     <div className="md:flex-shrink-0">
            //         <img className="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase"></img>
            //     </div>
            //     <div className="mt-4 md:mt-0 md:ml-6">
            //         <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Ibring Drivers</div>
            //         <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">{driver.fname}</a>
            //         <p className="mt-2 text-gray-600">{driver.mode}.</p>
            //         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
            //     </div>
            // </div>