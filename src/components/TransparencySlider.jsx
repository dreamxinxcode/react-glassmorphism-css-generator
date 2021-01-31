import React, { useState } from 'react'
import './TransparencySlider.scss';

function TransparencySlider() {
  const [transparency, setTransparency] = useState(0.50)

  const handleChange = (event) => {
    setTransparency(event.target.value);
  }

  return (
    <div>
      <label htmlFor="transparency">Transparency</label>
      <span>{transparency}</span>
      <input onChange={handleChange} type="range" id="transparency" name="transparency" min="0.00" max="1.00" step='0.01'></input>
    </div>
  )
}

export default TransparencySlider
