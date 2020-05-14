import React, { Component } from 'react'
import { connect } from 'react-redux'

export class RidersSideBarButton extends Component {
    state = {
        ridersClicked: false
    }

    handleClick() {
        console.log('Riders Clicked');
        this.setState({
            ridersClicked: !this.state.ridersClicked
        })
    }

    render() {
        const riderDropState = this.state.ridersClicked
        let DropDownState

        const OpenedDropDownState = () => {
            return (
                <div className='rounded-lg py-1 ml-6 mb-1 mt-2'>
                    <a className='block px-2 py-1 text-gray-900 rounded-lg hover:bg-teal-500 hover:text-teal-300' href="/riders/manage">Manage</a>
                    <a className='block px-2 py-1 text-gray-900 rounded-lg hover:bg-teal-500 hover:text-teal-300' href="/riders/online" >Online</a>
                    <a className='block px-2 py-1 text-gray-900 rounded-lg hover:bg-teal-500 hover:text-teal-300' href="/riders/offline" >Offline</a>
                </div>
            );
        }

        const ClosedDropDownState = () => {
            return (
                <div></div>
            );
        }

        riderDropState
            ? DropDownState = OpenedDropDownState()
            : DropDownState = ClosedDropDownState()

        return (
            <li className="flex-1 m-2" onClick={() => { this.handleClick() }}>
                <div className="block py-1 px-2 align-middle text-gray-800 no-underline hover:text-teal-300 hover:bg-teal-600 hover:border-teal-300 rounded-lg border-l-0 border-r-0 border-gray-800">

                    <div className='flex flex-row justify-between'>
                        <div>
                            <i className="fas fa-users md:pr-3"></i>
                            <span className="block text-xs md:inline-block">Riders</span>
                        </div>
                        <div>
                            {riderDropState
                                ? <i className="fas fa-chevron-up pr-2"></i>
                                : <i className="fas fa-chevron-down pr-2"></i>
                            }
                        </div>
                    </div>
                    {DropDownState}
                </div>
            </li>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RidersSideBarButton)
