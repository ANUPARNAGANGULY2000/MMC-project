import React from 'react';
import {Mediaslidernew} from './index';
import ReactPlayer from 'react-player'

const Media = () => {
  return (
    <div className=' font-display'>
      <div className=' p-4 m-4 border border-gray-400'><Mediaslidernew/></div>
      <div className='flex flex-col'>
        <div className=' border border-gray-400 shadow-md p-4 m-4'>
          <h1 className=' text-2xl text-sky-900 font-semibold p-4 m-4 shadow-lg'>Our Event Gallery</h1>
          <div className='flex flex-wrap w-full justify-center gap-2 p-4'>
            <img src='/images/event1.png' className=' md:w-[400px] md:h-[300px] w-[400px] h-[300] 'alt='/'/>
            <img src='/images/event2.png' className=' md:w-[400px] md:h-[300px] w-[400px] h-[300]' alt='/'/>
            <img src='/images/event3.png' className='md:w-[400px] md:h-[300px] w-[400px] h-[300]' alt='/'/>
          </div>
          </div>
        <div className=' border border-gray-400 shadow-md p-4 m-4'>
          <p className=' text-2xl text-sky-900 font-semibold p-4 m-4 shadow-lg'>Our Photo Gallery</p>
          <div className='flex flex-wrap w-full justify-center gap-4 p-2'>
            <img src='/images/mmgabout.jpg' className='md:w-[400px] md:h-[300px] w-[400px] h-[300]'alt='/'/>
            <img src='/images/mmgabout2.jpg' className='md:w-[400px] md:h-[300px] w-[400px] h-[300]' alt='/'/>
            <img src='/images/examine.jpg' className='md:w-[400px] md:h-[300px] w-[400px] h-[300]' alt='/'/>
            <img src='/images/dial.jpg' className='md:w-[400px] md:h-[300px] w-[400px] h-[300]' alt='/'/>
            <img src='/images/hero-slider-2.png' className='md:w-[400px] md:h-[300px] w-[400px] h-[300]' alt='/'/>
            <img src='/images/hero-slider-1.png' className='md:w-[400px] md:h-[300px] w-[400px] h-[300]' alt='/'/>
          </div>
          </div>
        <div className=' border border-gray-400 shadow-md p-4 m-4'>
          <p className=' text-2xl text-sky-900 font-semibold p-4 m-4 shadow-lg'>Our Video Gallery</p>
          <div className='flex flex-wrap w-full justify-center gap-4 p-4'><ReactPlayer url={'/images/mmc-video.mp4'} controls={true} />
          <ReactPlayer url={'/images/mmc-video2.mp4'} controls={true} /></div>
        </div>
      </div>
    </div>
  )
}

export default Media;
