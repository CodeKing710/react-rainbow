import React, { useState } from 'react'

function ColorForm(props){
  //Empty state input creation (applied by input in form)
  let [input, setInput] = useState('')

  //Properly add the color to the array (React will fix the DOM when the state changes)
  const handleSubmit = (e) => {
    e.preventDefault(); //We don't want default behavior from the submit event
    props.addColor(input); //addColor function was passed via JSX in App.js
    document.getElementById('colorForm').value = ''; //Remove current listing
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/*Will update the state of the input as you type to make sure nothing is missed*/}
        <input type="text" id="colorForm" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit!</button>
      </form>
    </div>
  )
}

export default ColorForm;