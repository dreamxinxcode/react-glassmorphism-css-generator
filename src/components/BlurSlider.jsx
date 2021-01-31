import React, { useState } from 'react'
import './Slider.scss';

function BlurSlider() {
  const [blur, setBlur] = useState(10.0)

  const handleChange = (event) => {
    setBlur(event.target.value);
  }

  return (
    <div className='slider'>
      <div className="indicator">
        <label htmlFor="blur">Blur</label>
        <span>{blur}</span>
      </div>
      <input onChange={handleChange} type="range" id="blur" name="blur" min="0.0" max="20.0" step='0.1'></input>
    </div>
  )
}

export default BlurSlider
