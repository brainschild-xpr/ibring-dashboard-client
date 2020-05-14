import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DeliverySideBarButton extends Component {
    render() {
        return (
            <div>
                <li className="flex-1 m-2">
                    <a href="/delivery"
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

                        <div className='flex flex-row justify-between'>
                            <div>
                                <i className="fas fa-truck md:pr-3"></i>

                                <span className="
                block
                text-xs
                md:inline-block">
                                    Delivery
                </span>
                            </div>
                            <div>
                                <i className="fas fa-chevron-down pr-2"></i>
                            </div>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeliverySideBarButton)