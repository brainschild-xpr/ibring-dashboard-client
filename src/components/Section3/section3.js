import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SectionThree extends Component {
    render() {
        return (
            <div className='flex flex-wrap mt-2'>
                <div className="
            w-full sm:w-full md:w-full lg:w-1/2
            bg-gray-400
            h-auto lg:rounded-tl-lg lg:rounded-none sm:rounded-lg">
                    <div className='p-2 flex flex-col'>
                        <h1 className='px-auto p-1 text-center bg-gray-500 rounded text-gray-700 text-lg'>
                            On Delivery
                        </h1>
                        <div className='overflow-auto h-64'>
                            <table className="table-auto ">
                                <thead>
                                    <tr>
                                        <th className='px-4 py-2'>OrderID</th>
                                        <th className="px-4 py-2">Item</th>
                                        <th className="px-4 py-2">Client</th>
                                        <th className="px-4 py-2">Driver</th>
                                        <th className="px-4 py-2">Start</th>
                                        <th className="px-4 py-2">End</th>
                                        <th className="px-4 py-2">Client Phone</th>
                                        <th className="px-4 py-2">Driver Phone</th>
                                        <th className="px-4 py-2">Driver Mode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">MP6789</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Adam</td>
                                        <td className="border px-4 py-2">Martin</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="border px-4 py-2">SP8945</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Jane</td>
                                        <td className="border px-4 py-2">David</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">TukTuk</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Medium Car</td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">MP6789</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Adam</td>
                                        <td className="border px-4 py-2">Martin</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Small Car </td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="border px-4 py-2">SP8945</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Jane</td>
                                        <td className="border px-4 py-2">David</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">MotorBike</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



                <div className="
            w-full sm:w-full md:w-full lg:w-1/2
            md:mt-2 lg:mt-0
            bg-gray-400 
            h-auto lg:rounded-tr-lg lg:rounded-none sm:rounded-lg">
                    <div className='p-2 flex flex-col'>
                        <h1 className='px-auto p-1 text-center bg-gray-500 rounded text-gray-700 text-lg'>
                            Cancelled
                        </h1>
                        <div className='overflow-auto h-64'>
                        <table className="table-auto ">
                                <thead>
                                    <tr>
                                        <th className='px-4 py-2'>OrderID</th>
                                        <th className="px-4 py-2">Item</th>
                                        <th className="px-4 py-2">Client</th>
                                        <th className="px-4 py-2">Driver</th>
                                        <th className="px-4 py-2">Start</th>
                                        <th className="px-4 py-2">End</th>
                                        <th className="px-4 py-2">Client Phone</th>
                                        <th className="px-4 py-2">Driver Phone</th>
                                        <th className="px-4 py-2">Driver Mode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">MP6789</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Adam</td>
                                        <td className="border px-4 py-2">Martin</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="border px-4 py-2">SP8945</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Jane</td>
                                        <td className="border px-4 py-2">David</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">TukTuk</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Medium Car</td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">MP6789</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Adam</td>
                                        <td className="border px-4 py-2">Martin</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Small Car </td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="border px-4 py-2">SP8945</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Jane</td>
                                        <td className="border px-4 py-2">David</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">MotorBike</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="
            w-full sm:w-full md:w-full lg:w-1/2
            mr-0 sm:mr-0 md:mt-2 lg:mr-0 
            bg-gray-400
            h-auto lg:rounded-tl-lg lg:rounded-none sm:rounded-lg">
                    <div className='p-2 flex flex-col'>
                        <h1 className='px-auto p-1 text-center bg-gray-500 rounded text-gray-700 text-lg'>
                            Picked Up
                        </h1>
                        <div className='overflow-auto h-64'>
                        <table className="table-auto ">
                                <thead>
                                    <tr>
                                        <th className='px-4 py-2'>OrderID</th>
                                        <th className="px-4 py-2">Item</th>
                                        <th className="px-4 py-2">Client</th>
                                        <th className="px-4 py-2">Driver</th>
                                        <th className="px-4 py-2">Start</th>
                                        <th className="px-4 py-2">End</th>
                                        <th className="px-4 py-2">Client Phone</th>
                                        <th className="px-4 py-2">Driver Phone</th>
                                        <th className="px-4 py-2">Driver Mode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">MP6789</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Adam</td>
                                        <td className="border px-4 py-2">Martin</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="border px-4 py-2">SP8945</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Jane</td>
                                        <td className="border px-4 py-2">David</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">TukTuk</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Medium Car</td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">MP6789</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Adam</td>
                                        <td className="border px-4 py-2">Martin</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Small Car </td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="border px-4 py-2">SP8945</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Jane</td>
                                        <td className="border px-4 py-2">David</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">MotorBike</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="
            w-full sm:w-full md:w-full lg:w-1/2
            lg:ml-0 md:mt-2
            bg-gray-400 
            h-auto lg:rounded-tr-lg lg:rounded-none sm:rounded-lg">
                    <div className='p-2 flex flex-col'>
                        <h1 className='px-auto p-1 text-center bg-gray-500 rounded text-gray-700 text-lg'>
                            Delivered
                        </h1>
                        <div className='overflow-auto h-64'>
                        <table className="table-auto ">
                                <thead>
                                    <tr>
                                        <th className='px-4 py-2'>OrderID</th>
                                        <th className="px-4 py-2">Item</th>
                                        <th className="px-4 py-2">Client</th>
                                        <th className="px-4 py-2">Driver</th>
                                        <th className="px-4 py-2">Start</th>
                                        <th className="px-4 py-2">End</th>
                                        <th className="px-4 py-2">Client Phone</th>
                                        <th className="px-4 py-2">Driver Phone</th>
                                        <th className="px-4 py-2">Driver Mode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">MP6789</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Adam</td>
                                        <td className="border px-4 py-2">Martin</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="border px-4 py-2">SP8945</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Jane</td>
                                        <td className="border px-4 py-2">David</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">TukTuk</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Medium Car</td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">MP6789</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Adam</td>
                                        <td className="border px-4 py-2">Martin</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Small Car </td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="border px-4 py-2">SP8945</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Jane</td>
                                        <td className="border px-4 py-2">David</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">MotorBike</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">SP7823</td>
                                        <td className="border px-4 py-2">Medium Parcel</td>
                                        <td className="border px-4 py-2">Michael</td>
                                        <td className="border px-4 py-2">Chris</td>
                                        <td className="border px-4 py-2">Rongai</td>
                                        <td className="border px-4 py-2">Thika</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">0712345678</td>
                                        <td className="border px-4 py-2">Bike</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SectionThree)
