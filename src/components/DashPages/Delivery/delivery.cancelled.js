import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../NavBar/navbar.react'

export class DeliveryCancelled extends Component {
    render() {
        return (
            <div>
                <NavBar title=' DeliveryCancelled' />
                <span className='p-3'>
                    DeliveryCancelled
            </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryCancelled)
