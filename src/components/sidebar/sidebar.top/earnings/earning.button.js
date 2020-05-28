import React, { Component } from 'react'
import { connect } from 'react-redux'

export class EarningSideBarButton extends Component {


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
                    <a className='block px-2 py-1 text-red-300 rounded-lg hover:bg-red-500 hover:text-red-300' href="/earnings/manage">Manage</a>
                    {/* <a className='block px-2 py-1 text-red-300 rounded-lg hover:bg-red-500 hover:text-red-300' href="/riders/online" >Posted</a>
                    <a className='block px-2 py-1 text-red-300 rounded-lg hover:bg-red-500 hover:text-red-300' href="/riders/offline" >Confirmed</a> */}

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
                <div
                    className="
                block 
                py-1 px-2
                align-middle 
                text-gray-500
                no-underline 
                hover:text-red-300
                hover:bg-red-700
                hover:border-red-300
                rounded-lg 
                border-l-0 border-r-0 border-gray-800">
                    <div className='flex flex-row justify-between'>
                        <div>
                            <i className="mr-1 fas fa-dollar-sign w-8 text-red-500 hover:text-red-200"></i>

                            <span className="
                block
                text-xs
                
                md:inline-block">
                                Earnings
                </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(EarningSideBarButton)
