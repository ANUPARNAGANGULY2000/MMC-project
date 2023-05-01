import React from 'react';
import {RxDotFilled} from 'react-icons/rx';

const Diagnosis = () => {
    return (
      
      <div className=' flex justify-center items-center p-4 m-3'>
        <div className=' flex flex-col items-center justify-center gap-4'>
          <h1 className=' flex items-center justify-center text-3xl text-sky-800 font-semibold'>Diagnostic Services</h1>
          <ul className='md:grid md:grid-flow-row md:grid-cols-3 flex flex-col items-baseline justify-start gap-3'>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Digital X-Ray [CR]</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Digital ECG</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Echocardiography</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Holter Monitoring</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Digital EEG</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Digital EMG</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Digital NCV</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Uroflowmetry</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Audiometry</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>All Blood Test</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Ultrasonography</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Colour Doppler</div>
              <div className=' flex iitems-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>OPG X-Ray</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>CT Scan</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>TMT</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>GI Endoscopy & Colonoscopy</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Cystoscopy</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Vep</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>BERA</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>RNS Study</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Tympanometry</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Nasal Endoscopy</div>
              <div className=' flex items-start justify-start gap-1 text-xl hover:text-sky-500 font-normal text-gray-600'><RxDotFilled className=' m-1 text-blue-900'/>Health Check-Up Packages</div>
          </ul>
        </div>
        </div>
  )
}

export default Diagnosis
