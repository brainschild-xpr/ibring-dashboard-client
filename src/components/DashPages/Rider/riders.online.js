import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../NavBar/navbar.react'

export class RidersOnline extends Component {
    render() {
        return (
            <div>
                <NavBar title='Riders Online' />
                <span className='p-3'>
                    Riders Online
            </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RidersOnline)
