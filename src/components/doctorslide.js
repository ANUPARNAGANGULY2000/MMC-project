import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FaFacebookF,FaInstagram} from 'react-icons/fa'
import {doctor} from './data'

const Doctorslide = () => {
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
    <div>
      <div className=' p-6 m-2 border border-gray-100 shadow-md'>
        <h1 className='text-sky-950 text-5xl font-bold p-2 m-2 font-display'>Expericenced Doctors</h1>
        <h3 className='text-black text-xl  font-sans p-2 m-2 font-display'>Our doctors are specialized in respective fields and take utmost care of their<br/>
        patients service of our doctors are well-appeciated widely.</h3>
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
                {doctor && doctor.map((data , index)=> (
                    <div className='shadow-md hover:border hover:border-black'>
                     <div key={data.id} className=' flex flex-col justify-center items-center'>
                        <img src={data.Image} alt='' className=' h-32 w-32 object-cover rounded-full m-4' />
                        <h1 className='text-sky-800 text-2xl p-3 font-display'>{data.name}</h1>
                        <h3 className='text-lg font-display' >{data.degree}</h3>
                        <h3 className=' text-lg text-sky-950 font-display'>{data.special}</h3>
                        <h4 className='font-normal p-3 m-2 text-lg font-display'>{data.description}</h4>
                        <ul className=' flex flex-row items-center justify-center gap-4 p-5 m-4'>
                        <li>
                         <a href="https://www.facebook.com/maldamedical">
                         <FaFacebookF className=' h-6 w-7 rounded-full shadow-lg border border-l-neutral-200 bg-slate-100 text-blue-700'/>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.instagram.com/maldamedical/"><FaInstagram className=' h-6 w-7 rounded-full shadow-lg border border-l-neutral-200 bg-slate-100 text-pink-600'/></a>
                          </li>
                        </ul>
                     </div>
                     
                    </div>
                   
                 ))}
        
    </Carousel>
            </div>
       
      
      </div>
    </div>
  )
}

export default Doctorslide
