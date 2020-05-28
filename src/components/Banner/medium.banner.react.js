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

      <div className='flex flex-row '>
        <div className="w-1/4 h-64 mx-4 bg-teal-400 shadow-2xl rounded-lg border-2 border-teal-500">
          <RiderBanner />
          {/* // number={driversLength} /> */}
        </div>

        <div className="w-1/4 h-64 mr-2 bg-orange-500 shadow-2xl rounded-lg border-2 border-orange-500">
          <OrderBanner postedOrders={postedOrdersLength} confirmedOrders={confirmedOrdersLength} />
        </div>

        <div className="w-1/4 h-64 ml-2 bg-blue-500 shadow-2xl rounded-lg border-2 border-blue-500">
          <DeliveryBanner />
        </div>

        <div className="w-1/4 h-64 mx-4 bg-red-500 shadow-2xl rounded-lg border-2 border-red-500">
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
