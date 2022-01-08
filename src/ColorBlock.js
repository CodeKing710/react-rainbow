import React from 'react';

function ColorBlock(props) {
  const setFormColor = (color) => {
    document.getElementById('colorForm').value = color;
  };

  return (
    <div className="colorBlock" style={{'backgroundColor': props.color}}>
      <button className="colorBtn" onClick={()=>{setFormColor(props.color)}}>
        <p>{props.color}</p>
      </button>
    </div>
  )
}

export default ColorBlock;