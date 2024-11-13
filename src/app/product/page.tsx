import React from 'react'
import '../product/product.css'
import Makeup from '@/src/components/makeup'

function product() {
  return (
   <div>
    <div>
    <div className='hi mt-2'>
        <a  href="/">Home </a> / <a href="">Make up</a>
        <h1 className='mt-4'>Make up</h1>
    </div>
    <div className="container"> 
    <div className="makeup-section">
        <Makeup/>
        <Makeup/>
        <Makeup/>
        <Makeup/>
    </div>
    </div>
    </div>
    
  </div>
  )
}

export default product
