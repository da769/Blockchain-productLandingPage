import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='Home'>
    <header className= 'text-3xl font-bold mb-4 items-center'> Blockchain Product Landing page</header>
      <div className='Team'>
      <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">Our Team</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold">Arnold Adenya</h3>
          <p>BSSC/353J/2019</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Marriet Kalama</h3>
          <p>BSSC/326J/2019</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Esther Mukai</h3>
          <p>BSSC/340J/2019</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Dennis Murithi Kirimi</h3>
          <p>BSSC/219J/2018</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Glaudencia Chevukwa</h3>
          <p>BSSC/385J/2019</p>
        </div>
      </div>
      </div>
      </div>

      <Link to='/Features'>   
     <button className='Button'>
      {/* <a href='./components/Feature.js'>
       Get Started
      </a> */}
      Get Started
       </button>
       </Link>



    </div>
  )
}

export default HomePage
