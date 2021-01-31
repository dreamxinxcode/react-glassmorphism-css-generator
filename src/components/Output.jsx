import React from 'react'
import './Output.scss';

function Output() {
  return (
    <div id='output'>
      <span>background: rgba( 255, 255, 255, 0.50 );</span>
      <span>box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );</span>
      <span>backdrop-filter: blur( 4px );</span>
      <span>-webkit-backdrop-filter: blur( 4px );</span>      
    </div>
  )
}

export default Output
