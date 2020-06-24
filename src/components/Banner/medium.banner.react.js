import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RiderBanner } from './banners/rider.banner'
import { OrderBanner } from './banners/order.banner'
import { DeliveryBanner } from './banners/delivery.banner'
import { EarningBanner } from './banners/earning.banner'

export class MDBanner extends Component {
  render() {
    const driversLength = this.props.drivers
    const postedOrdersLength = this.props.postedOrders
    const confirmedOrdersLength = this.props.confirmedOrders
    console.log(driversLength, postedOrdersLength, confirmedOrdersLength);

    return (

      <div className='flex lg:flex-row'>
        <div className="lg:w-1/4 md:w-1/2 h-64 lg:mx-4 bg-teal-400 shadow-2xl rounded-lg m-1 ">
          {/* border-2 border-teal-600 "> */}
          <RiderBanner number={driversLength} />
        </div>

        <div className="lg:w-1/4 md:w-1/2 h-64 lg:mr-2 bg-orange-500 shadow-2xl rounded-lg m-1 ">
          {/* border-2 border-orange-600 "> */}
          <OrderBanner postedOrders={postedOrdersLength} confirmedOrders={confirmedOrdersLength} />
        </div>

        <div className="lg:w-1/4 md:w-1/2 h-64 lg:ml-2 bg-blue-500 shadow-2xl rounded-lg m-1 ">
          {/* border-2 border-blue-600 "> */}
          <DeliveryBanner />
        </div>

        <div className="lg:w-1/4 md:w-1/2 h-64 lg:mx-4 bg-red-500 shadow-2xl rounded-lg m-1  ">
          {/* Sborder-2 border-red-600 "> */}
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
