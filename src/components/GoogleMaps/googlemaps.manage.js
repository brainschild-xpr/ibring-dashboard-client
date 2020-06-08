import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../NavBar/navbar.react'
import MapContainer from './googlemaps'

export class GoogleMapsManage extends Component {
    render() {
        return (
            <div>
                <NavBar title='Rider Tracking' />
                <div className='w-2/3'>
                    <MapContainer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMapsManage)
