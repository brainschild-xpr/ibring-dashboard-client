import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../NavBar/navbar.react'

export class DeliveryOnDelivery extends Component {
    render() {
        return (
            <div>
                <NavBar title=' DeliveryOnDelivery' />
                <span className='p-3'>
                    DeliveryOnDelivery
            </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryOnDelivery)
