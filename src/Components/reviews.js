import React from 'react'
import './Reviews.css';
import R1 from '../images/r1.png'
import R2 from '../images/r2.png'
import R3 from '../images/r3.png'

function products() {
    return (
        <>
        <div className='head'>
            <h3>Honest Reviews</h3>
        <h1>What Our Clients Are Saying</h1>
        </div>
      <div className='cards'>
    <div className='card'>
      <div className='body'>
        <img className='img' src={R1} alt=''/>
      </div>
    </div>
    <div className='card'>
    <div className='body'>
      <img className='img' src={R2} alt=''/>
    </div>
  </div>
  <div className='card'>
    <div className='body'>
      <img className='img' src={R3} alt=''/>
    </div>
  </div>
  </div>
  </>
  )
  
};
export default products
