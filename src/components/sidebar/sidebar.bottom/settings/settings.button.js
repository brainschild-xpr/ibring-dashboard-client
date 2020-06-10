import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SettingSideBarButton extends Component {
    render() {
        return (
            <div>
                <li className="flex-1 m-2">
                    <a href="/settings"
                        className=" block  py-1 px-2 align-middle  text-gray-500 no-underline  hover:text-teal-300 hover:bg-teal-700 hover:border-teal-300 rounded-lg  border-l-0 border-r-0 border-gray-800">
                        <div className='flex flex-row justify-between'>
                            <div>
                                <i className="fas fa-cog md:pr-3"></i>

                                <span className="block text-xs md:inline-block">
                                    Settings
                                    </span>
                            </div>
                            {/* <div>
                                <i className="fas fa-chevron-down pr-2"></i>
                            </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingSideBarButton)
