import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../NavBar/navbar.react'

export class OrdersPosted extends Component {
    render() {
        return (
            <div>
                <NavBar title=' OrdersPosted' />
                <span className='p-3'>
                     OrdersPosted
            </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPosted)
