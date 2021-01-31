import React, { useState } from 'react'
import './BlurSlider.scss';

function BlurSlider() {
  const [blur, setBlur] = useState(10.0)

  const handleChange = (event) => {
    setBlur(event.target.value);
  }

  return (
    <div>
      <label htmlFor="blur">Blur</label>
      <span>{blur}</span>
      <input onChange={handleChange} type="range" id="blur" name="blur" min="0.0" max="20.0" step='0.1'></input>
    </div>
  )
}

export default BlurSlider
