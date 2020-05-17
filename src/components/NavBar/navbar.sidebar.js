import React, { Component } from 'react'
import { connect } from 'react-redux'
import ibring_green from '../../icons/ibring_logo_green.jpeg'

export class NavBarSideBar extends Component {
    state = {
        isOpen: true
    }
    render() {

        return (
            <div className=' mx-auto h-auto flex-1 text-gray-700 text-center bg-gray-800 sticky'>
                <header className='flex items-center justify-between'>
                    <div className=''>
                        <img src={ibring_green} className='h-12' alt='Ibring Logo'></img>
                    </div>
                    {/* <div className='hidden md:block text-gray-900'>DashBoard</div>
                    <div className='hidden md:block text-gray-900'>API</div>
                    <div className='hidden md:block text-gray-900'>Sign In</div>
                    <div className='hidden md:block text-gray-900'>Sign Up</div> */}
                    {
                        this.state.isOpen
                            ?
                            <span className='px-6 text-teal-500 text-xl'>
                                <button>
                                    <i className="fas fa-times"></i>
                                </button>
                            </span>
                            : <i className="fas fa-bars"></i>
                    }
                </header>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSideBar)
