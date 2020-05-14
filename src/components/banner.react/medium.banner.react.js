import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DriverBanner } from './banners/driver.banner'
import { OrderBanner } from './banners/order.banner'
import { DeliveryBanner } from './banners/delivery.banner'
import { EarningBanner } from './banners/earning.banner'

export class MDBanner extends Component {
  render() {
    return (

      <div className='flex flex-row'>
        <div className="w-1/4 mx-16 bg-teal-400 shadow-2xl rounded-lg border-2 border-teal-500">
          <DriverBanner />
        </div>

        <div className="w-1/4 mr-8 bg-orange-500 shadow-2xl rounded-lg border-2 border-orange-500">
          <OrderBanner />
        </div>

        <div className="w-1/4 ml-8 bg-blue-500 shadow-2xl rounded-lg border-2 border-blue-500">
          <DeliveryBanner />
        </div>

        <div className="w-1/4 mx-16 bg-red-500 shadow-2xl rounded-lg border-2 border-red-500">
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
