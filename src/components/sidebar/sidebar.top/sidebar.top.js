import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DashboardSideBarButton } from './dashboard/dashboard.button';
import { OrderSideBarButton } from './orders/order.button';
import { RidersSideBarButton } from './riders/riders.button';
import { DeliverySideBarButton } from './delivery/delivery.button';
import { EarningSideBarButton } from './earnings/earning.button';
import { NavBarSideBar } from '../../NavBar/navbar.sidebar';


export class SideBarTop extends Component {
    render() {
        return (
            <div className='rounded-lg relative border-teal-400 border-t-0'>

                <DashboardSideBarButton />
                <RidersSideBarButton />
                <OrderSideBarButton />
                <DeliverySideBarButton />
                <EarningSideBarButton />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarTop)
