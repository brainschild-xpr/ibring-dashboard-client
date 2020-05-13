import React, { Component } from 'react'
import { connect } from 'react-redux'

export const WelcomeUsers = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex flex-row mt-2'>
                    <div className="w-full  md:w-2/3 md:mr-1 py-4 px-5 bg-gray-400 h-16 shadow-inner rounded-lg text-xl text-center">
                        Welcome XPR
                    </div>
                    <div className="w-0 md:w-1/3 ml-1 bg-gray-400 h-16 shadow-inner rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeUsers)
