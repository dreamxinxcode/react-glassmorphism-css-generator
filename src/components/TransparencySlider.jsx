import React, { useState } from 'react'
import './Slider.scss';

function TransparencySlider() {
  const [transparency, setTransparency] = useState(0.50)

  const handleChange = (event) => {
    setTransparency(event.target.value);
  }

  return (
    <div className='slider'>
      <div className="indicator">
        <label htmlFor="transparency">Transparency</label>
        <span>{transparency}</span>
      </div>
      <input onChange={handleChange} type="range" id="transparency" name="transparency" min="0.00" max="1.00" step='0.01'></input>
    </div>
  )
}

export default TransparencySlider
