import React from 'react'
import './DashCard.css'
import analytics from './Image/analytics.png'
function DashCard({title,num}) {
  return (
    <div className='dashcard-main'>
        <div className="card_img">
            <img src={analytics} alt="" />
        </div>
        <div className="card_info">
          <h2>{title}</h2>
          <p>{num}</p>
        </div>
    </div>
  )
}

export default DashCard