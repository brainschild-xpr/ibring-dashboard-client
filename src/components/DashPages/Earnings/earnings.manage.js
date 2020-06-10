import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../NavBar/navbar.react'

export class EarningsManage extends Component {
    render() {
        return (
            <div>
                <NavBar title=' EarningsManage' />
                <span className='p-3'>
                    EarningsManage
            </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EarningsManage)
