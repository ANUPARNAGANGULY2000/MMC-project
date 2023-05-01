import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Mediaslidernew = () => {
  return (
    <div className=' flex justify-center items-center object-cover '>
        <Carousel autoPlay={true} width={"100%"} transitionTime={4}
        infiniteLoop={true} showStatus={false} showIndicators={true}
        showThumbs={false} interval={3000} dynamicHeight={false}>
                
                <div>
                    <img src="/images/new1.jpeg" />
                    
                </div>
                <div >
                    <img src="/images/dial1.jpg" className='h-auto' />
                   
                </div>
                <div>
                    <img src="/images/mmgabout1.jpg" className='' />
                    
                </div>
                <div>
                    <img src="/images/hero.png" />
                    
                </div>
                <div>
                    <img src="/images/examine1new.jpg" />
                    
                </div>
                
            </Carousel>
      
    </div>
  )
}

export default Mediaslidernew
