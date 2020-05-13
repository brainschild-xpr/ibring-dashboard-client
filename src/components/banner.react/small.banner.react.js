import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DriverBanner } from './banners/driver.banner'
import { OrderBanner } from './banners/order.banner'
import { DeliveryBanner } from './banners/delivery.banner'
import { EarningBanner } from './banners/earning.banner'

export class SMBanner extends Component {
  render() {
    return (

      <div>
        <div className='hidden md:hidden lg:hidden sm:flex sm:flex-row sm:mt-2'>
          <div className="sm:w-1/2 sm:mr-1 bg-teal-400 h-56 shadow-xl rounded-lg">
            <DriverBanner />
          </div>

          <div className="sm:w-1/2 sm:ml-1 bg-orange-500 h-56 shadow-xl rounded-lg">
            <OrderBanner />
          </div>
        </div>

        <div className='hidden md:hidden lg:hidden sm:flex sm:flex-row sm:mt-2'>
          <div className="sm:w-1/2 sm:mr-1 bg-blue-500 h-56 shadow-xl rounded-lg">
            <DeliveryBanner />
          </div>

          <div className="sm:w-1/2 sm:ml-1 bg-red-500 h-56 shadow-xl rounded-lg">
            <EarningBanner />
          </div>
        </div >
      </div>

    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SMBanner)
