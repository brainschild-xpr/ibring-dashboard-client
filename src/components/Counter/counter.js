import React, { Component } from 'react'

import { connect, useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../redux/actions/counter.action'
import { getDrivers } from '../../redux/actions/getDriver.action'

export default function Counter() {
    const dispatch = useDispatch()

    // dispatch(getDrivers())

    const { count } = useSelector(state => state.counter)
    const { drivers } = useSelector(state => state.driver)
    

    

    const DriverList = drivers.map(({ id, uid, firstName, secondName }) => (
        <div className=' flex-col bg-gray-400' key={uid}>
            <div className='flex-1  text-gray-700 text-center bg-gray-300 px-4 py-2 m-2'>
                {firstName} {secondName} {uid}
            </div>
        </div>
    ))

    return (
        <div>
            <p className='p-4'>{count}</p>
            <button className='text-xl w-8' onClick={() => dispatch(increment())}>+</button>
            <button className='text-xl w-8' onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(getDrivers())}>GetDrivers</button>
        </div>
    )
}