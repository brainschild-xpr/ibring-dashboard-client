import React, { Component } from 'react'
import { connect } from 'react-redux'

export class RidersSideBarButton extends Component {
    render() {
        return (
            <div>
                <li className="flex-1 m-2">
                    <a href="/riders"
                        className="block 
                          py-1 px-2
                          align-middle 
                          text-gray-800
                          no-underline 
                          hover:text-teal-300
                          hover:bg-teal-700
                          hover:border-teal-300
                          rounded-lg 
                          border-b-2 border-r-2 border-gray-800">

                        <div className='flex flex-row justify-between'>
                            <div>
                                <i className="fas fa-users md:pr-3"></i>

                                <span className="
                    block
                    text-xs
                    md:inline-block">
                                    Riders
                  </span>
                            </div>

                            <div>
                                <i className="fas fa-chevron-down pr-2"></i>
                            </div>

                        </div>
                    </a>
                    <div className='absolute'>
                        <a href="/riders/manage">Manage</a>
                        <a href="/riders/online" >Online</a>
                        <a href="/riders/offline" >Offline</a>
                    </div>
                </li>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RidersSideBarButton)
