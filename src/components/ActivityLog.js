import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Moments from 'react-moment'

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


            <div className='bg-gray-700 text-center h-screen pt-2'>
                <div className='flex flex-row content-center justify-between'>
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

                    <div className='mx-4 text-gray-300'>
                        <p>ActivityLog</p>
                    </div>

                </div>
                <div className='flex bg-gray-600 p-2 mx-0 mt-0 rounded flex-row overflow-auto  '>
                    {activityArray.map(({ riderObj }) => {
                        return (
                            <button>

                                <div className='flex flex-row '>
                                    <div className=' flex-col px-2 py-2 '>
                                        <div className='w-16 h-16 self-center'>
                                            <img src={riderObj.driverPhoto} alt='Monkey D Luffy' className='w-full h-full rounded-full border-solid border-white border-2 object-cover' /></div>
                                        <div>
                                            <p>
                                                {riderObj.driverFname}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </button>
                        );
                    })}

                </div>
                {activityArray.map(({ timestamp, activitySync, _id, riderObj }) => {
                    const dateObj = new Date(timestamp)
                    return <div className='flex flex-row bg-gray-600 p-2 mx-2 mt-2 rounded justify-start' key={timestamp}>
                        <div className='flex rounded-full w-24 h-24 self-center'>
                            <img src={riderObj.driverPhoto} alt='Monkey D Luffy' className='w-full h-full rounded-full border-solid border-white border-2 object-cover' />
                        </div>
                        <div className='w-4/5 text-left pl-4 text-gray-400'>
                            {/* <Moments timestamp/> */}
                            {/* <p> {_id}</p> */}
                            {riderObj.driverFname + " " + riderObj.driverSname}
                            <p>{dateObj.getFullYear() + "/" + dateObj.getMonth() + "/" + dateObj.getDate()} </p>
                            <p>{dateObj.getHours() + ":" + dateObj.getMinutes()} </p>


                            <p className='text-teal-300'>- {activitySync['CONNECTAPP'].action}</p>
                        </div>
                    </div>
                })}
                {/* <div className='flex flex-row bg-gray-600 p-2 mx-2 mt-2 rounded justify-start'> */}
                {/* <div className='rounded-full w-12 h-12'>
                        <img src='https://www.alfabetajuega.com/wp-content/uploads/2020/04/one-piece-luffy-wano.jpg' alt='Monkey D Luffy' className='h-full rounded-full border-solid border-white border-2 object-cover' />
                    </div>
                    <div className='w-4/5 text-left pl-4'>
                        <p>Martin Shungoh</p>
                        <Moments />
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