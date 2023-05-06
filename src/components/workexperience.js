import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {workexp} from './work';

const Workexperience = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='bg-white'>
      <div className=' p-6 m-2 border border-gray-100 shadow-md font-display'>
        <h1 className='text-sky-950 text-5xl font-bold p-2 m-2'>Award winning patient care</h1>
        <h3 className='text-black text-xl font-sans p-2 m-2'>with 24 hours emergency service</h3>
      </div>

      <div>
        
            <div>
                <Carousel swipeable={false}
                        draggable={false}
                        
                      responsive={responsive}
  
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                transitionDuration={300}
                containerClass="carousel-container"
                 removeArrowOnDeviceType={["tablet", "mobile"]}
                
                dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
                {workexp && workexp.map((data , index)=> (
                    <div className='shadow-md'>
                     <div key={data.id} className=' flex flex-col justify-center items-center'>
                        <img src={data.Image} alt='' className=' h-32 w-32 object-cover rounded-full m-4' />
                        <h1 className='text-sky-800 font-semibold text-2xl p-3 font-display'>{data.name}</h1>
                        <h4 className='font-normal p-3 m-2 text-lg font-display'>{data.description}</h4>
                       
                     </div>
                     
                    </div>
                   
                 ))}
        
    </Carousel>
            </div>
       
      
      </div>
    </div>
  )
}

export default Workexperience;
