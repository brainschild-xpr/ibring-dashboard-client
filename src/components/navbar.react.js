import React, { Component } from 'react'
import { connect } from 'react-redux'
import ibring_green from '../icons/ibring_logo_green.jpeg'

export const NavBar = () => {
    return (
        <div className='container mx-auto h-auto flex-1 text-gray-700 text-center bg-gray-900 h-16'>
            <header className='flex items-center justify-between'>
                <div className='w-1/2 '>
                    <img src={ibring_green} className='w-16 m-0'></img>
                </div>
                <div className='hidden md:block text-white'>DashBoard</div>
                <div className='hidden md:block text-white'>API</div>
                <div className='hidden md:block text-white'>Sign In</div>
                <div className='hidden md:block text-white'>Sign Up</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu stroke-current text-white h-8 sm:h-8 md:h-0 lg:h-0 mr-2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </header>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
