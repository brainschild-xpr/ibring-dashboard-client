import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DeliveryBanner extends Component {
    render() {
        return (
            <div >
                <div className='bg-blue-600 rounded-lg'>
                    <div className='flex flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-truck stroke-current text-blue-400 w-16 m-2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                        <div className='p-6'>
                            <h1 className='text-lg text-blue-400 font-bold'>Delivery</h1>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col text-lg pt-1'>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-blue-900'>Accepted :</h1>
                        <h1 className='text-blue-900'>30</h1>
                    </div>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-blue-900'>Picked :</h1>
                        <h1 className='text-blue-900'>5</h1>
                    </div>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-blue-900'>onDelivery :</h1>
                        <h1 className='text-blue-900'>25</h1>
                    </div>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-blue-900'>Cancelled :</h1>
                        <h1 className='text-blue-900'>25</h1>
                    </div>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-blue-900'>Delivered :</h1>
                        <h1 className='text-blue-900'>25</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryBanner)
