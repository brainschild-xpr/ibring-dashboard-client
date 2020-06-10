import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DashboardSideBarButton extends Component {
    render() {
        return (
            <div>
                <li className="flex-1 m-2">
                    <a href="/dashboard"
                        className="
                block py-1 px-2 rounded-lg align-middle text-gray-500 no-underline hover:text-gray-900 hover:bg-white hover:border-white">
                        <i className="fas fa-tachometer-alt md:pr-3 text-black-500 w-8"></i>
                        <span className="block text-xs md:inline-block">
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
