import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../NavBar/navbar.react'

export class Account extends Component {
    render() {
        return (
            <div>
                <NavBar title=' Account' />
                <span className='p-3'>
                    Account
            </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
