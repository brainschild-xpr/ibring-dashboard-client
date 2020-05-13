import React, { Component } from 'react'
import { connect } from 'react-redux'

export class OrderBanner extends Component {
    render() {
        return (
            <div>
                <div className='bg-orange-600 rounded-lg'>
                    <div className='flex flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-bag stroke-current text-orange-400 w-16 m-2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        <div className='p-6'>
                            <h1 className='text-lg text-orange-400 font-bold'>Orders</h1>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col text-lg pt-1'>
                    <div className='flex justify-between pl-2 pr-2 '>
                        <h1 className='text-orange-900'>All :</h1>
                        <h1 className='text-orange-900'>30</h1>
                    </div>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-orange-900'>Posted :</h1>
                        <h1 className='text-orange-900'>5</h1>
                    </div>
                    <div className='flex justify-between pl-2 pr-2'>
                        <h1 className='text-orange-900'>Confirmed :</h1>
                        <h1 className='text-orange-900'>25</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderBanner)
