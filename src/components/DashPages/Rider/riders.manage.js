import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../NavBar/navbar.react'

export class RidersManage extends Component {
    render() {
        return (
            <div>
                <NavBar title='Riders Management' />
                <span>
                    Riders Manage
            </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RidersManage)
