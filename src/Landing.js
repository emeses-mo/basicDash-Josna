import React from 'react'
import DashCard from './DashCard'
import './Landing.css'
function Landing() {
  return (
    <div className='landing_main'>
            <div className="header">
                <div className="text">
                     <h1>Home / Dashboard</h1>
                </div>
                <div className="logout">
                    <button>Logout</button>
                </div>
               
            </div>
            <div className="dash_cards">
                <DashCard title="Total Sales" num='24000'/>
                <DashCard  title="Users Online" num='320'/>
                <DashCard  title="Cars Posted" num='69'/>
                <DashCard  title="Placeholder" num='420'/>
                <DashCard   title="Placeholder" num='52'/>
            </div>
    </div>
  )
}

export default Landing