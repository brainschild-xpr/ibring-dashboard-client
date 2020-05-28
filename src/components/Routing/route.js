import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeDashBoard from '../Home/home.dash'
// import Counter from '../Counter/counter'
import { RidersManage } from '../Rider/riders.manage'
import { RidersOnline } from '../Rider/riders.online'

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
            </Switch>
        </Router>
    )
}
