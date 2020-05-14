import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DriverBanner extends Component {
    render() {
        return (
            <div className=''>
                <div className='bg-teal-600 rounded-lg'>
                    <div className='flex flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user stroke-current text-teal-400 w-16 m-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <div className='p-6'>
                            <h1 className='text-lg text-teal-400 font-bold'>Drivers</h1>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col text-lg pt-1'>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-teal-900'>Online :</h1>
                        <h1 className='text-teal-900'>30</h1>
                    </div>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-teal-900'>On Delivery :</h1>
                        <h1 className='text-teal-900'>5</h1>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DriverBanner)
