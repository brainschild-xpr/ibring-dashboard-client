import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DashboardSideBarButton extends Component {
    render() {
        return (
            <div>
                <li className="flex-1 m-2">
                    <a href="/dashboard"
                        className="
                block 
                py-1 px-2
                align-middle 
                text-gray-800
                no-underline 
                hover:text-teal-300
                hover:bg-teal-700
                hover:border-teal-300
                rounded-lg 
                border-b-2 border-r-2 border-gray-800">

                        <i className="fas fa-tachometer-alt md:pr-3 text-black-500"></i>

                        <span className="
                block
                text-xs
                md:inline-block">
                            Dashboard
                </span>
                    </a>
                </li>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSideBarButton)
