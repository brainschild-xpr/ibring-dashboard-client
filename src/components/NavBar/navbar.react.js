import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ibring_green from '../../icons/ibring_logo_green.jpeg'

export class NavBar extends Component {

    render() {
        const { title } = this.props
        return (
            <div className='text-left bg-gray-400 sticky h-12'>
                <header>
                    <div className='text-teal-700 p-3 '>
                        <span>
                           > {title}
                        </span>
                    </div>
                    {/* <div className='hidden md:block text-gray-900'>API</div>
                    <div className='hidden md:block text-gray-900'>Sign In</div>
                    <div className='hidden md:block text-gray-900'>Sign Up</div> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu stroke-current text-gray-900 h-8 sm:h-8 md:h-0 lg:h-0 mr-2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> */}
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
