import React from 'react';
import './Clipboard.scss';

function Clipboard() {
  const handleCopy = () => {
    const codeDiv = document.getElementById('code');
    const css = codeDiv.innerText;
    const clipboardArea = document.querySelector('#clipboard span');

    navigator.clipboard.writeText(css)
    .then(() => clipboardArea.innerText = 'Copied');
  }

  return (
    <div onClick={handleCopy} id='clipboard'>
      <span>Copy</span>
      <i className="far fa-copy"></i>
    </div>
  )
}

export default Clipboard