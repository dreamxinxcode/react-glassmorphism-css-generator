import React from 'react'

function TransparencySlider() {


  return (
    <div>
      <label htmlFor="blur">Transparency</label>
      <input type="range" id="transparency" name="transparency" min="0.00" max="1.00"></input>
    </div>
  )
}

export default TransparencySlider
