// import { Link } from 'react-router-dom'

import React from 'react'


function HeroCard ( { heroLeft }) {

  return (
    // <Link>
    <div key={heroLeft.id}> 
      <div>
        <div className="card">
          <div className="card-content">
            <h3>{heroLeft.name}</h3>
          </div>
          <div className="card-image">
            <figure >
              <img src={heroLeft.images.md}/>
            </figure>
          </div>
        </div>
      </div>
    </div>
      
  // </Link>
  )
}

export default HeroCard