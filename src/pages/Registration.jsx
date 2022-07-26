import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import building from '../assets/building.png'
import gsearch from '../assets/search.png'
import Licon from '../assets/Licon.png'
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="registration">
        <div className='w-screen h-screen grid grid-cols-3'>
        <div className="relative col-span-1 h-full bg-[#2e42d6]">
          <div className="absolute bottom-0 ">
            <p className=" text-2xl text-white absolute w-[46px] h-[19px] pl-[136px] pt-[75px]">Oasis</p>
            <div className=' absolute w-[473px] h-[190px] pl-[82px] pt-[370px]'>
                <p className='text-5xl text-[#00DAF7]'>"</p>
                <p className=' text-white'>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
            </div>
            <img src={Licon} alt="" className=' absolute w-[33.5px] h-[33px] pl-[517.5px] pt-[639px]'/>
            <img src={building} alt="" className="w-full h-screen opacity-25  " />

          </div>
        </div>
        <div className="col-span-2 h-full bg-white flex flex-col space-y-20">
          {/* <div class="col-span-6 sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div> */}
          <div className='top-box mt-4 flex justify-around items-center'>
            <div className='flex'>
            <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
              
              <p>Back </p>
            </div>
            <div className='flex flex-col'>
              <p className='text-gray-500'>STEP 01/03</p>
              <p className='text-[#5a6067dd]'>Personal Info</p>
            </div>
          </div>
          <div className='main flex items-center justify-center'>
            <div className=''>
              <div className='top-text flex flex-col items-start space-y-2'>
                <h3 className='font-bold text-4xl'>Register Individual Account</h3>
                <p className='text-xl w-4/5 text-left text-gray-400'>For the purpose of industry regulation, your details are required.</p>
              </div>
              <div className='mt-5 space-y-4'>
                <div className='flex flex-col items-start  '>
                  <label for="first-name" class="block font-medium text-gray-700 text-xl">Your FullName*</label>
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-4" />
                </div>
                <div className='flex flex-col items-start '>
                  <label for="first-name" class="block font-medium text-gray-700 text-xl">Last Name*</label>
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-4" />
                </div>
                <div className='flex flex-col items-start '>
                  <label for="first-name" class="block font-medium text-gray-700 text-xl">Create Password*</label>
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-4" />
                </div>
                <div className="flex items-center mb-4">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-gray-600" />
                  <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 ">I agree to terms & conditions</label>
                </div>
                <div className='flex flex-col items-start '>
                <button className="bg-[#1565D8] hover:bg-blue-700 text-white  py-2 px-4 border border-blue-700 rounded w-[400px] h-[50px]">
                  Register Account
                </button>

                </div>
                <div className='flex flex-col items-start pt-4'>
                <button className="bg-white shadow-lg text-black  py-2 px-4 border  hover:border-blue-700 rounded w-[400px] h-[50px]">
                  <div className="flex items-center justify-around ">
                    <img src={gsearch} alt="google-search" className="h-[20px] w-[20px] "/>
                    <p className="pr-10">Register with Google</p>
                  </div>
                </button>

                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
      </div>
  )
}

export default Registration