import React, { Component } from 'react';
// import Drivers from './components/drivers.react';
import { NavBar } from './components/navbar.react';
// import { WelcomeUsers } from './components/welcome.react';
import { MDBanner } from './components/banner.react/medium.banner.react';
// import { SMBanner } from './components/banner.react/small.banner.react';
// import { XSBanner } from './components/banner.react/xs.banner.react';
// import { SectionThree } from './components/section.3/section3';
import { SideBarTop } from './components/sidebar/sidebar.top/sidebar.top';
import { SideBarBottom } from './components/sidebar/sidebar.bottom/sidebar.bottom';

import { connect } from 'react-redux'
// import LogRocket from 'logrocket'
// LogRocket.init('keubzn/ibring_logs')
// LogRocket.identify('matt')

class App extends Component {

  render() {
    console.log(this.props);
    const { drivers } = this.props

    const DriverList = drivers.map(driver => {
      return <div className=' flex-col bg-gray-400' key={driver.id}>
        <div className='flex-1  text-gray-700 text-center bg-gray-300 px-4 py-2 m-2'>
          {driver.fname} {driver.sname} {driver.mode}
        </div>
      </div>

    })



    return (
      <div className='bg-gray-300'>
        <NavBar />
        <div className='md:w-4/12 w-10M mx-auto fixed rounded-tr-lg rounded-br-lg mt-0'>
          <div className='bg-gray-900 px-0 pt-0 h-95M rounded-tr-lg rounded-br-lg shadow-2xl border-r-0 border-teal-500 border-t-2'>

            <div className='flex flex-col h-90M justify-between'>
              <ul className=" ">
                <SideBarTop />
              </ul>
              <ul className=" ">
                <SideBarBottom />
              </ul>
            </div>

          </div>
        </div>

        <div className=' flex flex-row md:justify-end h-auto mx-3'>
          <div className='sm:w-5/6 w-90M'>
            <MDBanner />
            {/* <div className='overflow-auto h-63M mt-2'> */}

            <div className='flex bg-teal-600 rounded-lg my-2'>
              <div className='bg-orange-600 h-63M w-1/2 ml-2 mr-1 my-2 px-6 py-10 rounded-lg'>
                {DriverList}
              </div>
              <div className='bg-orange-600 h-63M w-1/2 ml-1 mr-2 my-2 px-6 py-10 rounded-lg'>
                Middle</div>
            </div>

          </div>
          {/* </div> */}


          {/* <div className='flex flex-col w-1/6 md:hidden lg:block'>
          <div className='bg-gray-500 p-6 m-2 h-31M rounded-lg shadow-xl'>
            Right
          </div>
          <div className='bg-gray-500 p-6 m-2 mt-0 h-31M rounded-lg shadow-xl'>
            Right
          </div>
          <div className='bg-gray-500 p-6 m-2 mt-0 h-31M rounded-lg shadow-xl'>
            Right
          </div>
        </div> */}

        </div >
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  drivers: state.drivers
})

export default connect(mapStateToProps)(App)



// {/* <section className='w-1/6'>
//               <div className='bg-gray-500 p-6 m-2 h-64 rounded-lg shadow-xl'>
//                 Right
//             </div>
//             </section> 

// <section className='lg:w-auto'>
//             <div className='bg-gray-500 h-64'>
//               <p>Hello</p>
//             </div>
//           </section>  */}
    // <div className='flex flex row mt-2'>
    //       <div className="w-full bg-gray-400 h-16"></div>
    //     </div>
      // <div className='grid gap-0 grid-cols-3'>
      //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
      //     1
      //   </div>
      //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
      //     2
      //   </div>
      //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
      //     3
      //   </div>
      //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
      //     4
      //   </div>
      //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
      //     5
      //   </div>
      //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
      //     6
      //   </div>
      //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
      //     7
      //   </div>
      //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
      //     8
      //   </div>
      //   <div className='flex-1 text-gray-700 text-center bg-gray-300 py-5 m-1'>
      //     9
      //   </div>
      // </div>

    //   <div className="flex m-1 mt-2">
    //   <div className="w-1/4 bg-gray-500 h-48 mr-2"></div>
    //   <div className="w-1/4 bg-gray-400 h-48 mr-2"></div>
    //   <div className="w-1/4 bg-gray-500 h-48 mr-2"></div>
    //   <div className="w-1/4 bg-gray-400 h-64"></div>
    // </div>



    // <div className=' w-3/4'>
    //         <div className="w-1/3 bg-gray-500 h-48 mr-2"></div>
    //         <div className="w-1/3 bg-gray-400 h-48 mr-2"></div>
    //         <div className="w-1/3 bg-gray-600 h-48 mr-2"></div>
    //       </div>
    //       <div className='w-1/4'>
    //         <div className="bg-gray-700 h-auto mr-2"></div>
    //       </div>


  //   <div className='flex flex-col'>
  //   <div className='flex flex-row h-64'>
  //     <div className="w-1/4 bg-gray-500 h-48 mr-2"></div>
  //     <div className="w-1/4 bg-gray-400 h-48 mr-2"></div>
  //     <div className="w-1/4 bg-gray-500 h-48 mr-2"></div>
  //     <div className="w-1/4 bg-gray-500 h-full mr-2"></div>
  //   </div>

  //   <div className='flex flex-row h-64'>
  //     <div className="w-1/4 bg-gray-500 h-48 mr-2"></div>
  //     <div className="w-1/4 bg-gray-400 h-48 mr-2"></div>
  //     <div className="w-1/4 bg-gray-500 h-48 mr-2"></div>
  //     <div className="w-1/4 bg-gray-500 h-full mr-2"></div>
  //   </div>

  //   <div className='flex-1 text-gray-700 text-center bg-gray-300 p-5 m-2'>
  //     2
  //   </div>
  //   <div className='flex-1 text-gray-700 text-center bg-gray-300 p-5 m-2'>
  //     2
  //   </div>
  // </div>