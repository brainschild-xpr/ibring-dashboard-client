import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import { AnimatedList } from 'react-animated-list'
import "react-datepicker/dist/react-datepicker.css"

class ActivityLog extends Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        const activityArray = this.props.activity
        const date = new Date()
        const startTime = date.setHours(7)
        const endTime = date.setHours(17)
        console.log(startTime, endTime);

        return (


            <div className='bg-gray-700 text-center h-screen lg:w-full lg:block hidden pt-2'>
                <div className='flex flex-row content-center justify-between pt-2 pb-1'>
                    <div>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            // showTimeSelect
                            // minTime={startTime}
                            // maxTime={endTime}
                            // maxTime={setHours(setMinutes(new Date(), 30), 17)}
                            // dateFormat="MMMM d, yyyy h:mm aa"
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>

                    <div className='mr-4'>
                        <p className='text-teal-300'>ActivityLog</p>
                    </div>

                </div>
                <div className='flex bg-gray-600 rounded flex-row overflow-auto'>
                    <AnimatedList animation={'grow'}>
                        {activityArray.map(({ riderObj, timestamp }) => {
                            // console.log(riderObj);

                            return (
                                <div className='p-2' key={timestamp}>

                                    {/* <div className='flex flex-row '> */}
                                    <div className='flex-col content-between'>
                                        <div className='w-16 h-16 self-center'>
                                            <img src={riderObj.driverPhoto} alt='Monkey D Luffy' className='w-16 h-16 rounded-full border-solid border-white border-2 object-cover' /></div>
                                        <div>
                                            <p>
                                                {riderObj.driverFname}
                                            </p>

                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            );
                        })}
                    </AnimatedList>

                </div >
                <AnimatedList animation={'slide'}>
                    {activityArray.map(({ timestamp, activitySync, activityBackup, _id, riderObj }) => {
                        console.log('Activity Backup', activityBackup);

                        // const dateObj = new Date(timestamp)

                        const bakTime = new Date(timestamp)

                        const bakHours = bakTime.getHours()
                        let newBakHour
                        if (bakHours <= 9) {
                            newBakHour = '0' + bakHours.toString()
                            console.log('newBakHour', newBakHour)
                        } else {
                            newBakHour = bakHours
                        }

                        const bakMins = bakTime.getMinutes()
                        let newBakMins
                        if (bakMins <= 9) {
                            newBakMins = '0' + bakMins.toString()
                            console.log('newBakMins', newBakMins)
                        }
                        else {
                            newBakMins = bakMins
                        }

                        const bakYear = bakTime.getUTCFullYear()
                        let newBakYear
                        if (bakYear <= 9) {
                            newBakYear = '0' + bakYear.toString()
                            console.log('newBakYear', newBakYear)
                        } else {
                            newBakYear = bakYear
                        }

                        const bakMonths = bakTime.getMonth()
                        let newBakMonths
                        if (bakMonths <= 9) {
                            newBakMonths = '0' + bakMonths.toString()
                            console.log('newBakMonths', newBakMonths)
                        } else {
                            newBakMonths = bakMonths
                        }

                        const bakDate = bakTime.getDate()
                        let newBakDate
                        if (bakDate <= 9) {
                            newBakDate = '0' + bakDate.toString()
                            console.log('newBakDate', newBakDate)
                        } else {
                            newBakDate = bakDate
                        }

                        // const bakMins = bakTime.getMinutes()
                        // let newBakMins
                        // if (bakMins <= 9) {
                        //     newBakMins = '0' + bakMins.toString()
                        //     console.log('newBakMins', newBakMins)
                        // }
                        // else {
                        //     newBakMins = bakMins
                        // }
                        let activitySyncStatus = Object.keys(activitySync)
                        console.log('\nActivity Status\n', activitySyncStatus[0]);



                        let activitySyncStatusConnect


                        switch (activitySyncStatus[0]) {
                            case 'CONNECTAPP':
                                activitySyncStatusConnect = 'App Connected'
                                break;

                            case 'REACTCONNECT':
                                activitySyncStatusConnect = 'React Connected'
                                break;

                            default:
                                break;
                        }

                        // if (activitySync['CONNECTAPP'].action === 'APP_ACTIVITY_CONNECTAPP') {
                        //     activitySyncStatusConnect = 'RiderConnected'
                        // } else if (activitySync['REACTCONNECT'].action === 'REACT-FRONTEND') {
                        //     activitySyncStatusConnect = 'React COnnected'
                        // }

                        return <div className='flex flex-row bg-gray-600 p-2 mx-2 mt-2 rounded justify-between' key={timestamp}>
                            <div className='w-3/12 p-1'>
                                <div className='flex rounded-full self-center'>
                                    <img src={riderObj.driverPhoto} alt={riderObj.driverSname} className='w-16 h-16 rounded-full border-solid border-white border-2 object-cover' />
                                </div>
                            </div>

                            <div className='w-9/12 text-left text-gray-400 justify-between p-1'>
                                <div className='flex flex-row justify-between'>
                                    <p className='text-l'>{riderObj.driverFname + " " + riderObj.driverSname}</p>
                                    <p>{newBakHour + "" + newBakMins + " Hrs"} </p>

                                </div>

                                <div className='flex flex-row justify-between'>
                                    <p className='text-teal-300'>{
                                        activitySyncStatusConnect
                                    }</p>
                                    <p>{newBakDate + "/" + newBakMonths + "/" + newBakYear + ' '}</p>
                                </div>

                                {/* <p className='text-teal-300'>- {activityBackup[0].action}</p> */}
                                {/* <div className='text-teal-300 bg-gray-700 rounded-l p-2'>{activityBackup.map(({ _id, action }) => {
                                // const unixEpoch = new Date(_id);
                                // console.log(unixEpoch);
                                const bakTime = new Date(_id)

                                const bakHours = bakTime.getHours()
                                let newBakHour
                                if (bakHours <= 9) {
                                    newBakHour = '0' + bakHours.toString()
                                    console.log('newBakHour', newBakHour)
                                } else {
                                    newBakHour = bakHours
                                }

                                const bakMins = bakTime.getMinutes()
                                let newBakMins
                                if (bakMins <= 9) {
                                    newBakMins = '0' + bakMins.toString()
                                    console.log('newBakMins', newBakMins)
                                }
                                else {
                                    newBakMins = bakMins
                                }

                                return <div>
                                    <p>{action}</p>
                                    <p>{' At ' + newBakHour + '' + newBakMins + " Hrs"}</p>

                                </div>
                            })}</div> */}
                            </div>
                        </div>
                    })}
                </AnimatedList>
                {/* <div className='flex flex-row bg-gray-600 p-2 mx-2 mt-2 rounded justify-start'> */}
                {/* <div className='rounded-full w-12 h-12'>
                        <img src='https://www.alfabetajuega.com/wp-content/uploads/2020/04/one-piece-luffy-wano.jpg' alt='Monkey D Luffy' className='h-full rounded-full border-solid border-white border-2 object-cover' />
                    </div>
                    <div className='w-4/5 text-left pl-4'>
                        <p>Martin Shungoh</p>
                        < />
                        <p>{Date()}</p>
                        <p>{Date()}</p>

                        <p className='text-teal-300'>- Logged into App</p>
                    </div> */}

                {/* </div> */}
                {/* <div className=' flex flex-row bg-gray-600 p-2 m-1 rounded'>
                    <div className='rounded-full w-20 h-20 bg-gray-900'>
                        <img src='https://www.alfabetajuega.com/wp-content/uploads/2020/04/one-piece-luffy-wano.jpg' alt='Monkey D Luffy' className='h-20 rounded-full border-solid border-white border-2 object-cover' />
                    </div>
                    <div className='ml-2 w-2/3'>
                        <p>Martin Shungoh</p>
                        <p>{Date()}</p>
                        <p className='text-teal-300'>- Logged into App</p>
                    </div>
                </div> */}
            </div>

        );
    }
}
export default ActivityLog

    //   <div className='w-1/3 bg-gray-700 text-gray-300 m-1 text-center pt-4'>
    //         Timeline
    //         <DatePicker/>
    //         <div className='flex flex-col m-2'>
    //             <div className=' flex flex-row bg-gray-600 p-2 m-1 rounded'>
    //                 <div className='rounded-full w-20 h-20 bg-gray-900'>
    //                     <img src='https://www.alfabetajuega.com/wp-content/uploads/2020/04/one-piece-luffy-wano.jpg' alt='Monkey D Luffy' className='h-20 rounded-full border-solid border-white border-2 object-cover' />
    //                 </div>
    //                 <div className='ml-2 w-2/3'>
    //                     <p>Martin Shungoh</p>
    //                     {/* <p>{Date()}</p> */}
    //                     <p className='text-teal-300'>- Logged into App</p>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className='flex flex-col m-2'>
    //             <div className=' flex flex-row bg-gray-600 p-2 m-1 rounded'>
    //                 <div className='rounded-full w-20 h-20 bg-gray-900'>
    //                     <img src='https://www.alfabetajuega.com/wp-content/uploads/2020/04/one-piece-luffy-wano.jpg' alt='Monkey D Luffy' className='h-20 rounded-full border-solid border-white border-2 object-cover' />
    //                 </div>
    //                 <div className='ml-2 w-2/3'>
    //                     <p>Martin Shungoh</p>
    //                     {/* <p>{Date()}</p> */}
    //                     <p className='text-teal-300'>- Logged into App</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>