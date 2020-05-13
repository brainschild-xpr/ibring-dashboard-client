import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DriverBanner } from './banners/driver.banner'
import { OrderBanner } from './banners/order.banner'
import { DeliveryBanner } from './banners/delivery.banner'
import { EarningBanner } from './banners/earning.banner'

export class XSBanner extends Component {
  render() {
    return (
      <div className='sm:hidden md:hidden lg:hidden flex flex-wrap'>
        <div className="w-full mt-2 bg-teal-500 h-48 shadow-xl rounded-lg">
          <DriverBanner />
        </div>

        <div className="w-full mt-2 bg-orange-500 h-48 shadow-xl rounded-lg">
          <OrderBanner />
        </div>

        <div className="w-full mt-2 bg-blue-500 h-56 shadow-xl rounded-lg">
          <DeliveryBanner />
        </div>

        <div className="w-full mt-2 bg-red-500 h-56 shadow-xl rounded-lg">
          <EarningBanner />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(XSBanner)
