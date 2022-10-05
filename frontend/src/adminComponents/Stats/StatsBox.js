import React from 'react'
import './stats-box.scss';

function StatsBox({number, title}) {
  return (
    <div className='stats-box-wrapper'>
        {title} &nbsp; {number}
    </div>
  )
}

export default StatsBox