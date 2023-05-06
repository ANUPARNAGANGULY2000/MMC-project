import React from 'react'
import {doctor} from './data'
import {FaFacebookF,FaInstagram} from 'react-icons/fa';
const FindDoctor = () => {
  return (
    <div className=' font-display'>
      <div className=' flex items-center flex-col justify-center'>
      <div className=' p-6 m-2 border border-gray-100 shadow-md'>
        <h1 className='text-sky-950 md:text-5xl text-3xl font-bold p-2 m-2'>Expericenced Doctors</h1>
        <h3 className='text-black text-xl font-sans p-2 m-2'>Our doctors are specialized in respective fields and take utmost care of their<br/>
        patients service of our doctors are well-appeciated widely.</h3>
      </div>
      <div className='grid grid-flow-row md:grid-cols-3 max-w-full grid-cols-1  justify-start items-start p-3 m-3 gap-5 '>
        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Cardiologist</h1>
          <h2 className=' font-semibold'>Dr.Sujata Chakraborty</h2>
          <h5>M.D. ,D.M. ,(P.G.I.Chandigar)</h5>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Gynecologist</h1>
          <ul>
            <li>
              
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Dipanjan Roy</h2>
          <h5>M.S (O & G)</h5></li>
          <li>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Priyanka Bannerjee</h2>
          <h5>M.B.B.S (F & G)</h5>
          
          </li>
          </ul>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Gastroentrologist & Hepatologist</h1>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Niraj Agerwala</h2>
          <h5>M.D ,D.M (Gastro)</h5>
        </div>
            
        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Neurologist</h1>
          <ul>
            <li>
              
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Dibyayanam Sahoo</h2>
          <h5>M.D. ,D.M. (neuro)</h5></li>
          <li>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Silladitya Roy</h2>
          <h5>M.D.</h5>
          
          </li>
          </ul>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Skin Specialist & Surgeon</h1>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Nishant Agerwala</h2>
          <h5>M.B.B.S,M.D(Skin),Gold Medalist</h5>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>General Physician & Critical Care Specialist</h1>
          <ul>
            <li>
              
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Mostaque Ahamed</h2>
          <h5>M.B.B.S, D.N.B.</h5></li>
          <li>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Sandeep Agerwala</h2>
          <h5>M.B.B.S,Nephro Fellow</h5>
          
          </li>
          </ul>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Chest Medicine</h1>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.MD.Ikbal Hassan</h2>
          <h5>M.B.B.S,MD(Respiratory Medicine)</h5>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Child Specialist</h1>
          <ul>
            <li>
              
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Gopal Pandey</h2>
          <h5>D.N.B., M.D.(Paed)</h5></li>
          <li>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Fashiul Akbar</h2>
          <h5>M.B.B.S,D.C.H.</h5>
          
          </li>
          </ul>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Eye Specialist & Surgeon</h1>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Aanchal Agerwala</h2>
          <h5>M.B.B.S,D.O.(R.I.O.Kol)</h5>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>General & Laparoscopic Surgeon</h1>
          <ul>
            <li>
              
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Rakesh Mondal</h2>
          <h5>M.B.B.S, M.S.(Gold Medalist)</h5></li>
          <li>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Debajit Das</h2>
          <h5>M.B.B.S,M.S.</h5>
          
          </li>
          </ul>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>E.N.T</h1>
          <ul>
            <li>
              
          <h2 className=' font-semibold hover:text-blue-700'>Dr.G.C.Gayen</h2>
          <h5>M.S.(E.N.T)</h5></li>
          <li>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Sayeda Zeba Islam</h2>
          <h5>M.S.(E.N.T)</h5>
          </li>
          <li>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Misbahul Haq</h2>
          <h5>M.S.(E.N.T)</h5>
          
          </li>
          </ul>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Cardio Physician</h1>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Arindam Basak</h2>
          <h5>M.B.B.S,F.C.C., P.G.D.C.C</h5>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Urologist & Uro Surgeon</h1>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Kuntal Pandit</h2>
          <h5>M.S. ,D.N.B(Uro)</h5>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Infertility Specialist</h1>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Suparna Banerjee</h2>
          <h5>D.G.O., M.D., M.R.C.O.G.</h5>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Orthopedic Surgeon</h1>
          <ul>
            <li>
              
          <h2 className=' font-semibold hover:text-blue-700'>Dr.S.K.Moinuddin</h2>
          <h5>M.S.(Ortho)</h5></li>
          <li>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.A.P.Gupta</h2>
          <h5>M.S.(Ortho)</h5>
          
          </li>
          </ul>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Dentist & Dental Surgeon</h1>
          <ul>
            <li>
              
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Ramiz Akhtar</h2>
          <h5>B.D.S</h5></li>
          <li>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Arghya Ghosh</h2>
          <h5>B.D.S</h5>
          </li>
          <li>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Gourab Das</h2>
          <h5>B.D.S, M.D.S</h5>
          
          </li>
          </ul>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Child Blood & Cancer Specialist</h1>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Sneha Agerwala</h2>
          <h5>M.D.(Paed),F.N.B.(Heamato-oncology)</h5>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Cardiologist & Cardiothoracic Surgeon</h1>
          <ul>
            <li>
              
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Priyadarshan Konar</h2>
          <h5>M.S.,M.C.H.(CTVS)</h5></li>
          <li>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Debabrata Biswas</h2>
          <h5>M.S.,M.C.H.</h5>
          
          </li>
          </ul>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Neuro Surgeon</h1>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Ashok Kr. Acharya</h2>
          <h5>M.S.,M.C.H.</h5>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Neuro Psychiatrist</h1>
          <h2 className=' font-semibold hover:text-blue-700'>Dr. Abhisik Dandapath</h2>
          <h5>M.B.B.S. M.D.(Psychiatry)</h5>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Oncologist & Onco GI Surgeon</h1>
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Argha Basu</h2>
          <h5>M.S.,D.N.B., M.R.C.S.,F.A.C.S</h5>
        </div>

        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Nutritional Dietician</h1>
          <ul>
            <li>
              
          <h2 className=' font-semibold hover:text-blue-700'>Dr.Victor Mukherjee</h2>
          <h5>B.H.M.S ,M.S.C</h5></li>
          <li>
          <h2 className=' font-semibold hover:text-blue-700'>Ms.Emily Bhattacharjee</h2>
          <h5>B.S.C,M.S.C</h5>
          
          </li>
          </ul>
        </div>
        <div>
          <h1 className='bg-blue-950 text-white flex justify-center items-center p-2'>Physiotherapist</h1>
          <h2 className=' font-semibold hover:text-blue-700'>Mr. Suman Sarkar</h2>
          <h5>B.P.T</h5>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FindDoctor
