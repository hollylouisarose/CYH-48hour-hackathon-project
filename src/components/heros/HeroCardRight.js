

import React from 'react'


function HeroCard ( { heroRight }) {

  

  const handleClick = () => {

  }
  
  return (
    <div onClick={handleClick} key={heroRight.id} > 
      <div>
        <div className="card">
          <div className="card-content">
            <h3>{heroRight.name}</h3>
          </div>
          <div className="card-image">
            <figure >
              <img src={heroRight.images.md}/>
            </figure>
          </div>
        </div>
      </div>
    </div>



      
  )
}

export default HeroCard