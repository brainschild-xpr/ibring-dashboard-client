import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../NavBar/navbar.react'

export class Settings extends Component {
    render() {
        return (
            <div>
                <NavBar title=' Settings' />
                <span className='p-3'>
                    Settings
            </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
