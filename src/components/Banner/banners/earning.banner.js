import React, { Component } from 'react'
import { connect } from 'react-redux'

export class EarningBanner extends Component {
    render() {
        return (
            <div className="">
                <div className='bg-red-600 rounded-lg'>
                    <div className='flex flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign stroke-current text-red-400 w-16 m-2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        <div className='p-6'>
                            <h1 className='text-lg text-red-400 font-bold'>Earnings</h1>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col text-lg pt-1'>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-red-900'>Total :</h1>
                        <h1 className='text-red-900'>25000</h1>
                    </div>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-red-900'>Daily :</h1>
                        <h1 className='text-red-900'>500</h1>
                    </div>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-red-900'>Weekly :</h1>
                        <h1 className='text-red-900'>3500</h1>
                    </div>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-red-900'>Monthly :</h1>
                        <h1 className='text-red-900'>15000</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(EarningBanner)
