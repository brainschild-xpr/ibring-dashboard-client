import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DeliverySideBarButton extends Component {

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
                    <a className='block px-2 py-1 text-blue-300 rounded-lg hover:bg-blue-500 hover:text-blue-300' href="/delivery/manage">Manage</a>
                    <a className='block px-2 py-1 text-blue-300 rounded-lg hover:bg-blue-500 hover:text-blue-300' href="/delivery/onDelivery" >onDelivery</a>
                    <a className='block px-2 py-1 text-blue-300 rounded-lg hover:bg-blue-500 hover:text-blue-300' href="/delivery/cancelled" >Cancelled</a>
                    <a className='block px-2 py-1 text-blue-300 rounded-lg hover:bg-blue-500 hover:text-blue-300' href="/delivery/delivered" >Delievered</a>
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
                <div className="block py-1 px-2 align-middle text-gray-500 no-underline hover:text-blue-300 hover:bg-blue-700 hover:border-blue-300 rounded-lg border-l-0 border-r-0 border-gray-800">

                    <div className='flex flex-row justify-between'>
                        <div>
                            <i className="mr-1  fas fa-truck md:pr-3 text-blue-500 hover:text-red-200"></i>
                            <span className=" block text-xs md:inline-block">Delivery</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeliverySideBarButton)
