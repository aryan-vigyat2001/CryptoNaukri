import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import building from '../assets/building.png'
import gsearch from '../assets/search.png'
import person from '../assets/person.png'
import { Link } from 'react-router-dom';
const Joinus = () => {
    return (
        <div className='Joinus'>
            <div className='w-screen h-screen grid grid-cols-3'>
                <div className="relative col-span-1 h-full bg-[#2e42d6]">
                    <div className="absolute bottom-0">
                        <p className=" text-2xl text-white absolute w-[46px] h-[19px] pl-[136px] pt-[75px]">Oasis</p>
                        <div className=' absolute w-[473px] h-[190px] pl-[82px] pt-[370px]'>
                            <p className='text-5xl text-[#00DAF7]'>"</p>
                            <p className=' text-white'>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
                        </div>
                        <div>

                        </div>
                        <img src={building} alt="" className="w-full h-screen opacity-25  " />
                    </div>
                </div>
                <div className="col-span-2 h-full bg-white flex flex-col space-y-20">
                    {/* <div class="col-span-6 sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div> */}
                    <div className='top-box mt-4 flex justify-end pr-10'>
                        <div className='flex flex-col'>
                            <span>Already Signed Up ?<span className='text-blue-500'> <Link to="/registration">Sign In</Link></span></span>
                        </div>
                    </div>
                    <div className='main flex items-center justify-center'>
                        <div className=''>
                            <div className='top-text flex flex-col items-start space-y-2'>
                                <h3 className='font-bold text-4xl'>Join Us!</h3>
                                <p className='text-xl w-4/5 text-left text-gray-400'>To begin this journey, tell us what type of account you’d be opening.</p>
                            </div>
                            <div className='mt-5 space-y-4'>
                                <div className='box-border h-24 w-[450px] p-4 border-4 hover:border-indigo-500 border-white'>
                                    <div className='flex items-center justify-around'>
                                        <img src={person} className="w-10 h-10" alt="person"/>
                                        <div className="flex flex-col space-y-2">
                                            <p className="bold">Individual</p>

                                            <p className="text-gray-500 ">Personal account to manage all you activities.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className='box-border h-24 w-[450px] p-4 border-4 hover:border-indigo-500 border-white'>
                                    <div className='flex items-center justify-around'>
                                        <img src={person} className="w-10 h-10" alt="person"/>
                                        <div className="flex flex-col space-y-2">
                                            <p className="bold">Business</p>

                                            <p className="text-gray-500 ">Own or belong to a company, this is for you.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Joinus