import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../NavBar/navbar.react'

export class OrdersConfirmed extends Component {
    render() {
        return (
            <div>
                <NavBar title=' OrdersConfirmed' />
                <span className='p-3'>
                    OrdersConfirmed
            </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersConfirmed)
