import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {event} from './eventdata'

const Eventslide = () => {
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
    <div className=' p-3 m-2 bg-white'>
      <div className=' p-6 m-2 shadow-md'>
        <h1 className='text-sky-950 text-5xl font-bold p-2 m-2 font-display'>Media & Events</h1>
        
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
                {event && event.map((data , index)=> (
                    <div className='shadow-md hover:border hover:border-black'>
                     <div key={data.id} className=' flex flex-col justify-center items-center'>
                        <img src={data.Image} alt='' className='md:w-[400px] md:h-[300px] w-[400px] h-[300] object-cover m-4' />
                        <h1 className='text-sky-800 text-2xl p-3 font-display'>{data.name}</h1>
                        <h3 className='text-lg font-display' >{data.date}</h3>
                        <h3 className=' text-lg text-sky-950 font-display'>By: {data.by}</h3>
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

export default Eventslide
