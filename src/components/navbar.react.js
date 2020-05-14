import React, { Component } from 'react'
import { connect } from 'react-redux'
import ibring_green from '../icons/ibring_logo_green.jpeg'

export class NavBar extends Component {
    render() {
        return (
            <div className=' mx-auto h-5M flex-1 text-gray-700 text-center bg-gray-300 sticky top-0'>
                <header className='flex items-center justify-between'>
                    <div className='w-1/2 '>
                        <img src={ibring_green} className='h-5M m-0' alt='Ibring Logo'></img>
                    </div>
                    <div className='hidden md:block text-gray-900'>DashBoard</div>
                    <div className='hidden md:block text-gray-900'>API</div>
                    <div className='hidden md:block text-gray-900'>Sign In</div>
                    <div className='hidden md:block text-gray-900'>Sign Up</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu stroke-current text-gray-900 h-8 sm:h-8 md:h-0 lg:h-0 mr-2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </header>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
