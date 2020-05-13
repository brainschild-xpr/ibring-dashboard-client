import React from 'react';
// import Drivers from './components/drivers.react';
import userIcon from './svg/user.svg'
import { NavBar } from './components/navbar.react';
import { WelcomeUsers } from './components/welcome.react';
import { MDBanner } from './components/banner.react/medium.banner.react';
import { SMBanner } from './components/banner.react/small.banner.react';
import { XSBanner } from './components/banner.react/xs.banner.react';
import { SectionThree } from './components/section.3/section3';

function App() {
  return (
    <div className='bg-gray-300'>
      <NavBar />
      <div className='container mx-auto h-auto'>
        <WelcomeUsers />
        <MDBanner />
        <SMBanner />
        <XSBanner />

        <SectionThree />

        {/* <div className='flex flex-row mt-2'>
          <div className="
          sm:w-full md:w-1/2 lg:w-1/2 
          sm:mr-0 lg:mr-1 md:mr-1
          bg-gray-600 
          h-64 rounded-lg"></div>
          <div className="
          sm:w-full md:w-1/2 lg:w-1/2 
          sm:mr-0 lg:ml-1 md:ml-1
          bg-gray-600 
          h-64 rounded-lg"></div>
        </div> */}


        {/* <div className='flex flex row mt-2'>
          <div className="w-full bg-gray-400 h-16"></div>
        </div> */}
      </div >
    </div>
  );
}

export default App;
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