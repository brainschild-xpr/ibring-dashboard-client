import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DriverBanner } from './banners/driver.banner'
import { OrderBanner } from './banners/order.banner'
import { DeliveryBanner } from './banners/delivery.banner'
import { EarningBanner } from './banners/earning.banner'

export class MDBanner extends Component {
  render() {
    return (

      <div className='hidden md:flex md:flex-row md:mt-2'>
        <div className="md:w-1/4  md:mr-1 bg-teal-400 h-56 shadow-xl rounded-lg">
          <DriverBanner />
        </div>

        <div className="md:w-1/4 sm:ml-1 md:mr-1 md:ml-1 bg-orange-500 h-56 shadow-xl rounded-lg">
          <OrderBanner />
        </div>

        <div className="md:w-1/4 md:ml-1 md:mr-1 lg:mr-1 bg-blue-500 h-56 shadow-xl rounded-lg">
          <DeliveryBanner />
        </div>

        <div className=" md:w-1/4 md:ml-1 md:mr-0 lg:mr- lg:ml-1 bg-red-500 h-56 shadow-xl rounded-lg">
          <EarningBanner />
        </div>
      </div >

    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MDBanner)
