import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../NavBar/navbar.react'

export class OrdersManage extends Component {
    render() {
        return (
            <div>
                <NavBar title='Orders Management' />
                <span>
                    Orders Manage
            </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersManage)
