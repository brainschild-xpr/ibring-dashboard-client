import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeDashBoard from '../Home/home.dash'
// import Counter from '../Counter/counter'
import { RidersManage } from '../Rider/riders.manage'
import { RidersOnline } from '../Rider/riders.online'
import { GoogleMapsManage } from '../GoogleMaps/googlemaps.manage'
import { OrdersManage } from '../Order/orders.manage'
import { OrdersPosted } from '../Order/orders.posted'
import { OrdersConfirmed } from '../Order/orders.confirmed'
import { DeliveryManage } from '../DashPages/Delivery/delivery.manage'
import { DeliveryOnDelivery } from '../DashPages/Delivery/deliveryonDelivery'
import { DeliveryCancelled } from '../DashPages/Delivery/delivery.cancelled'
import { DeliveryDelivered } from '../DashPages/Delivery/delivery.delivered'
import { EarningsManage } from '../DashPages/Earnings/earnings.manage'
import { Account } from '../DashPages/Account/account'
import { Settings } from '../DashPages/Settings/settings'


export default function RoutePages() {
    return (
        <Router>
            <Switch>
                {/* Route to DashBoard Home from '/' & '/dashboard' */}
                <Route path="/" exact >
                    <HomeDashBoard />
                    {/* <Counter /> */}
                </Route>/>
                <Route path="/dashboard" exact >
                    <HomeDashBoard />
                </Route>


                {/* Route to Riders Manage Home from '/riders/manage' */}
                <Route path="/riders/manage" exact >
                    <RidersManage />
                </Route>
                {/* Route to Riders Online Home from '/riders/online */}
                <Route path="/riders/online" exact>
                    <RidersOnline />
                </Route> />


                {/* Route to Riders Online Home from '/riders/online */}
                <Route path="/orders/manage" exact>
                    <OrdersManage />
                </Route> />
                {/* Route to Riders Manage Home from '/riders/manage' */}
                <Route path="/orders/posted" exact >
                    <OrdersPosted />
                </Route>
                {/* Route to Riders Manage Home from '/riders/manage' */}
                <Route path="/orders/confirmed" exact >
                    <OrdersConfirmed />
                </Route>


                {/* Route to Riders Online Home from '/riders/online */}
                <Route path="/delivery/manage" exact>
                    <DeliveryManage />
                </Route> />
                {/* Route to Riders Manage Home from '/riders/manage' */}
                <Route path="/delivery/onDelivery" exact >
                    <DeliveryOnDelivery />
                </Route>
                {/* Route to Riders Manage Home from '/riders/manage' */}
                <Route path="/delivery/cancelled" exact >
                    <DeliveryCancelled />
                </Route>
                {/* Route to Riders Manage Home from '/riders/manage' */}
                <Route path="/delivery/delivered" exact >
                    <DeliveryDelivered />
                </Route>


                {/* Route to Riders Online Home from '/riders/online */}
                <Route path="/earnings/manage" exact>
                    <EarningsManage />
                </Route> />


                {/* Route to Riders Online Home from '/riders/online */}
                <Route path="/googlemaps/manage" exact>
                    <GoogleMapsManage />
                </Route> />


                {/* Route to Riders Online Home from '/riders/online */}
                <Route path="/account" exact>
                    <Account />
                </Route> />


                {/* Route to Riders Online Home from '/riders/online */}
                <Route path="/settings" exact>
                    <Settings />
                </Route> />


                {/* Route to Riders Online Home from '/riders/online */}
                <Route path="/googlemaps/manage" exact>
                    <GoogleMapsManage />
                </Route> />




            </Switch>
        </Router>
    )
}
