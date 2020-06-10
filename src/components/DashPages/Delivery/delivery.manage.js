import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../NavBar/navbar.react'
// import { NavBar } from '../NavBar/navbar.react'

export class DeliveryManage extends Component {
    render() {
        return (
            <div>
                <NavBar title=' DeliveryManage' />
                <span className='p-3'>
                    DeliveryManage
            </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryManage)
