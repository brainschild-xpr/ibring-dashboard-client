import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AccountSideBarButton } from './account/account.button'
import { SettingSideBarButton } from './settings/settings.button'
import { LogOutSideBarButton } from './logout/logout.button'

export class SideBarBottom extends Component {
    render() {
        return (
            <div>
                <AccountSideBarButton />
                <SettingSideBarButton />
                <LogOutSideBarButton />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarBottom)
