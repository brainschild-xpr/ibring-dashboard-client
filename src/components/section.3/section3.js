import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SectionThree extends Component {
    render() {
        return (
            <div className='flex flex-wrap mt-2'>
                <div className="
            w-full sm:w-full md:w-full lg:w-1/2
            mr-0 sm:mr-0 md:mr-0 lg:mr-0 
            bg-gray-400
            h-64 lg:rounded-tl-lg lg:rounded-none sm:rounded-lg">
                    <div flex flex-col>
                        <h1 className='px-auto p-4 text-center bg-gray-500 rounded text-gray-700 text-lg'>
                            On Delivery
                        </h1>
                        <table class="table-auto">
                            <thead>
                                <tr>
                                    <th className='px-4 py-2'>OrderID</th>
                                    <th class="px-4 py-2">Client</th>
                                    <th class="px-4 py-2">Driver</th>
                                    <th class="px-4 py-2">Start</th>
                                    <th class="px-4 py-2">End</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border px-4 py-2">MP6789</td>
                                    <td class="border px-4 py-2">Adam</td>
                                    <td class="border px-4 py-2">Martin</td>
                                    <td class="border px-4 py-2">Rongai</td>
                                    <td class="border px-4 py-2">Thika</td>
                                </tr>
                                <tr class="bg-gray-100">
                                    <td class="border px-4 py-2">SP8945</td>
                                    <td class="border px-4 py-2">Jane</td>
                                    <td class="border px-4 py-2">David</td>
                                    <td class="border px-4 py-2">Rongai</td>
                                    <td class="border px-4 py-2">Thika</td>
                                </tr>
                                <tr>
                                    <td class="border px-4 py-2">SP7823</td>
                                    <td class="border px-4 py-2">Michael</td>
                                    <td class="border px-4 py-2">Chris</td>
                                    <td class="border px-4 py-2">Rongai</td>
                                    <td class="border px-4 py-2">Thika</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



                <div className="
            w-full sm:w-full md:w-full lg:w-1/2
            lg:ml-0 
            bg-gray-500 
            h-64 lg:rounded-tr-lg lg:rounded-none sm:rounded-lg">
                    <div flex flex-col>
                        <h1 className='px-auto p-4 text-center bg-gray-600 rounded text-gray-400 text-lg'>
                            Cancelled
                        </h1>
                        <table class="table-auto">
                            <thead>
                                <tr>
                                    <th className='px-4 py-2'>OrderID</th>
                                    <th class="px-4 py-2">Client</th>
                                    <th class="px-4 py-2">Driver</th>
                                    <th class="px-4 py-2">Start</th>
                                    <th class="px-4 py-2">End</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border px-4 py-2">MP6789</td>
                                    <td class="border px-4 py-2">Adam</td>
                                    <td class="border px-4 py-2">Martin</td>
                                    <td class="border px-4 py-2">Rongai</td>
                                    <td class="border px-4 py-2">Thika</td>
                                </tr>
                                <tr class="bg-gray-100">
                                    <td class="border px-4 py-2">SP8945</td>
                                    <td class="border px-4 py-2">Jane</td>
                                    <td class="border px-4 py-2">David</td>
                                    <td class="border px-4 py-2">Rongai</td>
                                    <td class="border px-4 py-2">Thika</td>
                                </tr>
                                <tr>
                                    <td class="border px-4 py-2">SP7823</td>
                                    <td class="border px-4 py-2">Michael</td>
                                    <td class="border px-4 py-2">Chris</td>
                                    <td class="border px-4 py-2">Rongai</td>
                                    <td class="border px-4 py-2">Thika</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="
            w-full sm:w-full md:w-full lg:w-1/2
            mr-0 sm:mr-0 md:mr-0 lg:mr-0 
            bg-gray-400
            h-64 lg:rounded-tl-lg lg:rounded-none sm:rounded-lg">
                    <div flex flex-col>
                        <h1 className='px-auto p-4 text-center bg-gray-500 rounded text-gray-700 text-lg'>
                            Picked Up
                        </h1>
                        <table class="table-auto">
                            <thead>
                                <tr>
                                    <th className='px-4 py-2'>OrderID</th>
                                    <th class="px-4 py-2">Client</th>
                                    <th class="px-4 py-2">Driver</th>
                                    <th class="px-4 py-2">Start</th>
                                    <th class="px-4 py-2">End</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border px-4 py-2">MP6789</td>
                                    <td class="border px-4 py-2">Adam</td>
                                    <td class="border px-4 py-2">Martin</td>
                                    <td class="border px-4 py-2">Rongai</td>
                                    <td class="border px-4 py-2">Thika</td>
                                </tr>
                                <tr class="bg-gray-100">
                                    <td class="border px-4 py-2">SP8945</td>
                                    <td class="border px-4 py-2">Jane</td>
                                    <td class="border px-4 py-2">David</td>
                                    <td class="border px-4 py-2">Rongai</td>
                                    <td class="border px-4 py-2">Thika</td>
                                </tr>
                                <tr>
                                    <td class="border px-4 py-2">SP7823</td>
                                    <td class="border px-4 py-2">Michael</td>
                                    <td class="border px-4 py-2">Chris</td>
                                    <td class="border px-4 py-2">Rongai</td>
                                    <td class="border px-4 py-2">Thika</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="
            w-full sm:w-full md:w-full lg:w-1/2
            lg:ml-0 
            bg-gray-500 
            h-64 lg:rounded-tr-lg lg:rounded-none sm:rounded-lg">
                    <div flex flex-col>
                        <h1 className='px-auto p-4 text-center bg-gray-600 rounded text-gray-400 text-lg'>
                            Delivered
                        </h1>
                        <table class="table-auto">
                            <thead>
                                <tr>
                                    <th className='px-4 py-2'>OrderID</th>
                                    <th class="px-4 py-2">Client</th>
                                    <th class="px-4 py-2">Driver</th>
                                    <th class="px-4 py-2">Start</th>
                                    <th class="px-4 py-2">End</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border px-4 py-2">MP6789</td>
                                    <td class="border px-4 py-2">Adam</td>
                                    <td class="border px-4 py-2">Martin</td>
                                    <td class="border px-4 py-2">Rongai</td>
                                    <td class="border px-4 py-2">Thika</td>
                                </tr>
                                <tr class="bg-gray-100">
                                    <td class="border px-4 py-2">SP8945</td>
                                    <td class="border px-4 py-2">Jane</td>
                                    <td class="border px-4 py-2">David</td>
                                    <td class="border px-4 py-2">Rongai</td>
                                    <td class="border px-4 py-2">Thika</td>
                                </tr>
                                <tr>
                                    <td class="border px-4 py-2">SP7823</td>
                                    <td class="border px-4 py-2">Michael</td>
                                    <td class="border px-4 py-2">Chris</td>
                                    <td class="border px-4 py-2">Rongai</td>
                                    <td class="border px-4 py-2">Thika</td>
                                </tr>
                            </tbody>
                        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(SectionThree)
