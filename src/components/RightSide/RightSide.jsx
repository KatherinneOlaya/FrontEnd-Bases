import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'


const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <h3>Actualizaciones</h3>
            <Updates/>
        </div>
        <div>
            <h3>Review consumidor</h3>
            <CustomerReview/>
        </div>
    </div>
  )
}

export default RightSide