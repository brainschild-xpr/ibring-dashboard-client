import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../NavBar/navbar.react'

export class DeliveryDelivered extends Component {
    render() {
        return (
            <div>
                <NavBar title=' DeliveryDelivered' />
                <span className='p-3'>
                    DeliveryDelivered
            </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryDelivered)
