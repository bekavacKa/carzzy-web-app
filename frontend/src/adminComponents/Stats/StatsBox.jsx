import React from 'react'
import './stats-box.scss';

function StatsBox({number, title}) {
  return (
    <div className='stats-box-wrapper'>
      <h2>
        {title}
      </h2>
      <h3>
        {number}
      </h3>
    </div>
  )
}

export default StatsBox