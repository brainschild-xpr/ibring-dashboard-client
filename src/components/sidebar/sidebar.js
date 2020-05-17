import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SideBarTop } from './sidebar.top/sidebar.top'
import { SideBarBottom } from './sidebar.bottom/sidebar.bottom'
import { NavBarSideBar } from '../NavBar/navbar.sidebar'

export class SideBar extends Component {
    render() {
        return (
            <div className='md:w-2/12 mx-auto fixed mt-0 bg-gray-900 px-0 pt-0 h-screen shadow-2xl border-teal-400 border-t-0 border-r-0'>
                <div className=''>
                    <div className='flex flex-col h-90M justify-between'>
                        <ul className=" ">
                            <NavBarSideBar />
                            <SideBarTop />
                        </ul>
                        <ul className=" ">
                            <SideBarBottom />
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
