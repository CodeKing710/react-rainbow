import './App.css';
import React, {useState} from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  //Create dummy data for React to create a state from
  let [colors, setColors] = useState(['violet','blue','lightblue','green','greenyellow','yellow','orange','red']);

  //Map the JSX Elements into a new array
  let colorMap = colors.map((color, i) => {
    return(
      <ColorBlock key={i} color={color} />
    )
  });

  //Function to link the client DOM and virtual DOM for state insertion
  const addColor = (newColor) => {setColors([...colors, newColor])};

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;